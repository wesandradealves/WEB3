import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { imageUrl } = req.query;
  if (!imageUrl || typeof imageUrl !== 'string') {
    return res.status(400).send('Missing imageUrl');
  }

  try {
    const cleanPath = imageUrl.startsWith('/') ? imageUrl : `/${imageUrl}`;
    const targetUrl = `http://18.231.174.187${cleanPath}`;

    const response = await fetch(targetUrl, {
      headers: {
        'User-Agent': req.headers['user-agent'] || '',
        'Accept': req.headers['accept'] || '*/*',
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Image proxy error:', response.status, errorText);
      return res.status(response.status).send('Image not found');
    }

    res.setHeader('Content-Type', response.headers.get('content-type') || 'image/png');
    const buffer = await response.arrayBuffer();
    res.send(Buffer.from(buffer));
  } catch (err) {
    console.error('Proxy error:', err);
    res.status(500).send('Error fetching image');
  }
}
