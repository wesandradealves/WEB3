"use client";

import { useParams } from 'next/navigation';

export default function Single() {
  const { slug } = useParams();
  return (
    <div className='text-white text-center pt-[128px]'>{slug}</div>
  );
}