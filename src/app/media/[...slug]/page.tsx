"use client";

import { useParams } from 'next/navigation';
import Section from '@/components/section/section';
import { useMedia } from '@/context/media';
import { useEffect, useState } from 'react';
import slugify from 'slugify';
import { MediaProp } from '@/context/media'; 
import { FiClock, FiUser, FiArrowLeft } from 'react-icons/fi';
import Link from 'next/link';
import { formatDate } from '@/utils/date';

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
        <div className='text-gray-800'>
          <Section
            className='relative min-h-[60vh] flex items-center'
            backgroundimage={filteredMedia?.thumbnail}
          >
            <div className='absolute inset-0 bg-gradient-to-t from-black/80 to-transparent' />
            <div className='container relative z-10 text-white pt-32 pb-16'>
              <div className='max-w-4xl mx-auto'>
                <Link 
                  href="/media" 
                  className='mb-8 inline-flex items-center gap-2 hover:text-primary-bdm3 transition-colors'
                >
                  <FiArrowLeft /> Voltar para notícias
                </Link>
                <div className='flex flex-wrap gap-4 mb-6 text-sm'>
                  <span className='flex items-center gap-2'>
                    <FiUser size={16} /> {filteredMedia.author}
                  </span>
                  <span className='flex items-center gap-2'>
                    <FiClock size={16} /> {formatDate(filteredMedia.date || '')} • {filteredMedia.readTime}
                  </span>
                </div>
                <h1 className='text-4xl md:text-5xl font-bold mb-6'>
                  {filteredMedia.title}
                </h1>
                <div className='inline-block bg-primary-bdm3 text-primary-bdm4 px-4 py-2 rounded-full text-sm'>
                  {filteredMedia.category}
                </div>
              </div>
            </div>
          </Section>

          <Section className='py-16'>
            <div className='container max-w-4xl mx-auto prose lg:prose-xl'>
              <div 
                className='text-gray-700 leading-relaxed'
                dangerouslySetInnerHTML={{ __html: filteredMedia?.body || '' }} 
              />
            </div>
          </Section>
        </div>
      ) : (
        <div className="text-white text-center pt-[128px]">
          <p>No media found for this slug.</p>
        </div>
      )}
    </>
  );
}
