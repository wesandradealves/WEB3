"use client";

import { useParams } from 'next/navigation';
import { useEffect } from 'react';

export default function Single() {
  const { slug } = useParams();

  useEffect(() => {
    if (slug) {
      // Fetch or retrieve the media data based on the slug
      // For example, you can use an API call to get the data
      // setMediaData(fetchMediaData(slug));
      console.log(`Slug received: ${slug}`);
    }
  }, [slug]);

  return (
    <div className='text-white text-center pt-[128px]'>{slug}</div>
  );
}