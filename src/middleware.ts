import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname, origin } = request.nextUrl;

  if (pathname === '/') {
    return NextResponse.redirect(new URL('/home', request.url));
  }

  if (pathname.startsWith('/wp-content/uploads/')) {
    const newUrl = new URL(request.url);
    newUrl.hostname = 'dev-bdm.dourado.cash';
    newUrl.protocol = 'https:';
    newUrl.port = '8000';
    return NextResponse.rewrite(newUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/wp-content/uploads/:path*'],
};
