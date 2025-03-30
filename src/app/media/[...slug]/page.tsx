"use client";

import { useParams } from 'next/navigation';
import Section from '@/components/section/section';
import { useMedia } from '@/context/media';
import { useEffect, useState } from 'react';
import slugify from 'slugify';
import { MediaProp } from '@/context/media';
import { FiClock, FiUser, FiArrowLeft } from 'react-icons/fi';
import Link from 'next/link';
import { formatDate } from '@/utils/index';
import { Title } from '@/components/section/styles';
import { Body } from './style';

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
        <>
          <Section
            backgroundattachment='fixed'
            className='text-white text-center pt-[90px] lg:pt-[128px] lg:pb-[90px] flex-col-reverse'
            opacity={90}
            gap={4}
            backgroundimage={filteredMedia?.thumbnail}
          >
            <>
              <Link
                href="/"
                className='inline-flex text-base lg:text-xl items-center gap-2 hover:text-primary-bdm3 transition-colors'
              >
                <FiArrowLeft /> Voltar para notícias
              </Link>
              <ul className='flex flex-wrap gap-4 text-sm list-none text-base lg:text-xl'>
                <li className='flex items-center gap-2'>
                  <FiUser size={16} /> {filteredMedia.author}
                </li>
                <li className='flex items-center gap-2'>
                  <FiClock size={16} /> {formatDate(filteredMedia.date || '')} • {filteredMedia.readTime}
                </li>
              </ul>
              <Title className='text-start leading-1 text-xl lg:text-4xl'><b>{filteredMedia.title}</b></Title>
              <span className='px-4 py-2 rounded-full text-sm bg-white bg-opacity-5 m-auto  text-base lg:text-xl'>
                {filteredMedia.category}
              </span>
            </>
          </Section>

          {filteredMedia?.body && (<Section>
            <Body className='text-base lg:text-lg xl:text-xl' dangerouslySetInnerHTML={{ __html: filteredMedia?.body }} />
          </Section>)}
        </>
      ) : (
        <div className="text-white text-center pt-[128px]">
          <p>No media found for this slug.</p>
        </div>
      )}
    </>
  );
}
