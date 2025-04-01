/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useParams } from 'next/navigation';
import { useEffect, useState, Suspense, useCallback } from 'react';
import React from 'react';
import { PageService } from '@/services/userService';
import DynamicComponent from '@/components/DynamicComponent/DynamicComponent';

export default function Page() {
  const { slug } = useParams();
  const [content, setContent] = useState<any>(null);

  const fetcthData = useCallback(async (slug: string) => {
    try {
      const _slug = Array.isArray(slug) ? Array.from(slug).pop() : slug;

      PageService(_slug)
      .then((data) => {
        setContent(data.acf_blocks)
      })
      .catch(err => {
        console.error('Error fetching page data:', err);
      });
    } catch (error) {
      console.error('Error loading navigation:', error);
    }
  }, []);

  useEffect(() => {
    if (slug) fetcthData(Array.isArray(slug) ? slug[0] : slug)
  }, [slug]);

  return (
    <>
      {content && (
        content.map((object: any, index: number) => (
          <Suspense key={index} fallback={<div>Carregando...</div>}>
            <DynamicComponent
              data={object.attrs.data}
              machineName={object.machine_name}
            />
          </Suspense>
        ))
      )}
    </>
  );
}