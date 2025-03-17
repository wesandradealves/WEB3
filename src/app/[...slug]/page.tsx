"use client";

import { useParams } from 'next/navigation';
import { useEffect } from 'react';

export default function Single() {
  const { slug } = useParams();

  useEffect(() => {
    if (slug) {
      console.log(`Slug received: ${slug}`);
    }
  }, [slug]);

  return (
    <div className='text-white text-center pt-[128px]'>{slug}</div>
  );
}