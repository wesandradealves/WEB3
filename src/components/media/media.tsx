"use client";

import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Container, Meta, Title, Text, Item, ItemInner, CategoryTag } from './styles';
import { Props } from './typo';
import React from "react";
import Slider from "react-slick";
import { useRouter } from 'next/navigation';
import slugify from 'slugify';
import { useMedia } from '@/context/media';
import { FiClock, FiUser } from 'react-icons/fi';

const truncateText = (text: string, limit: number) => {
  if (text.length <= limit) return text;
  return text.substring(0, limit) + '...';
};

export default function Media({ data, className }: Props) {
  const { media } = useMedia();

  const items = data || media;

  const router = useRouter();

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    arrows: false,
    initialSlide: 0,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <Container className={`${className}`}>
      <Slider {...settings}>
        {items && (items.map((item, index) => {
          const slug = slugify(item.title, {
            replacement: '-',  // replace spaces with replacement character, defaults to `-`
            remove: undefined, // remove characters that match regex, defaults to `undefined`
            lower: true,      // convert to lower case, defaults to `false`
            strict: true,     // strip special characters except replacement, defaults to `false`
            locale: 'pt',      // language code of the locale to use
            trim: true         // trim leading and trailing replacement chars, defaults to `true`
          });
          return (
            <Item
              className='h-full cursor-pointer group text-base'
              key={index}
              onClick={() => router.push(`media/${slug}`)}
            >
              <ItemInner className='flex flex-col gap-4 rounded-[48px] h-full overflow-hidden'>
                {item.thumbnail && (
                  <div className='lg:h-[190px] overflow-hidden relative'>
                    <LazyLoadImage
                      className='w-full object-cover transition-transform duration-300 lg:group-hover:scale-105'
                      src={item.thumbnail}
                      alt={item.title}
                    />
                    <CategoryTag className='absolute top-4 left-4 rounded-full px-4 py-2'>
                      {item.category}
                    </CategoryTag>
                  </div>
                )}
                <div className='flex flex-col gap-4 p-6 flex-1 pt-0'>
                  <Meta className='flex items-center gap-1 text-base'>
                    <span className='flex items-center gap-1'>
                      <FiUser size={14} />
                      {item.author}
                    </span>
                    <span className='flex items-center gap-1'>
                      <FiClock size={14} /> {`${item.date} • ${item.readTime}`}
                    </span>
                  </Meta>
                  <Title dangerouslySetInnerHTML={{ __html: item.title }} className='font-bold lg:text-xl'/>
                  {item.summary && (
                    <Text  dangerouslySetInnerHTML={{ __html: truncateText(item.summary, 120) }} />
                  )}
                </div>
              </ItemInner>
            </Item>
          );
        }))}
      </Slider>
    </Container>
  );
}
