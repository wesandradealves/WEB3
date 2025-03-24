"use client";

import { useParams } from 'next/navigation';
import Section from '@/components/section/section';
import { useMedia } from '@/context/media';
import { useEffect, useState } from 'react';
import slugify from 'slugify';
import { MediaProp } from '@/context/media'; 

export default function Single() {
  const { slug } = useParams();
  const { media } = useMedia();
  
  const [filteredMedia, setFilteredMedia] = useState<MediaProp | null>(null);

  useEffect(() => {
    if (slug) {
      const slugString = Array.isArray(slug) ? slug[0] : slug;

      const slugifiedSlug = slugify(slugString, {
        replacement: '-', 
        remove: undefined, 
        lower: true,
        strict: true,
        locale: 'pt',
        trim: true
      });

      const matchedItem = media.find(item => slugify(item.title, {
            replacement: '-',  // replace spaces with replacement character, defaults to `-`
            remove: undefined, // remove characters that match regex, defaults to `undefined`
            lower: true,      // convert to lower case, defaults to `false`
            strict: true,     // strip special characters except replacement, defaults to `false`
            locale: 'pt',      // language code of the locale to use
            trim: true         // trim leading and trailing replacement chars, defaults to `true`
          }) === slugifiedSlug);
      setFilteredMedia(matchedItem ?? null);
    }
  }, [slug, media]);

  return (
    <>
      {slug && filteredMedia ? (
        <div className='text-white text-center pt-[128px]'>
          <Section
            backgroundattachment='fixed'
            backgroundimage={filteredMedia?.thumbnail}
            title={`<b>${filteredMedia.title}</b>`}
          />

          {filteredMedia?.body && (<Section>
            <div dangerouslySetInnerHTML={{ __html: filteredMedia?.body }} />
          </Section>)}
        </div>
      ) : (
        <div className="text-white text-center pt-[128px]">
          <p>No media found for this slug.</p>
        </div>
      )}
    </>
  );
}
