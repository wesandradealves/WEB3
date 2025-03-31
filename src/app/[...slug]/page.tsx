/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useParams } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';
import React from 'react';
import { PageService } from '@/services/userService';
import DynamicComponent from '@/components/DynamicComponent/DynamicComponent';

export default function Page() {
  const { slug } = useParams();
  const [content, setContent] = useState<any>(null);

  useEffect(() => {
    if (slug) {
      const _slug = Array.isArray(slug) ? slug[0] : slug;

      PageService(_slug)
      .then((data) => {
        setContent(data.acf)
      })
      .catch(err => {
        console.error('Error fetching page data:', err);
      });
    }
  }, [slug]);

  return (
    <>
      {content && (
        Object.keys(content).map((componentName: any, index: number) => (
          <Suspense key={index} fallback={<div>Carregando...</div>}>
            <DynamicComponent
              data={content[componentName]}
              machineName={componentName}
            />
          </Suspense>
        ))
      )}
    </>
  );
}