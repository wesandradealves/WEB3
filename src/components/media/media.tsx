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
    centerMode: false,
    arrows: false,
    initialSlide: 0,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }, {
        breakpoint: 992,
        settings: {
          slidesToShow: 2
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
              title={item.body}
              className='h-full cursor-pointer group'
              key={index}
              onClick={() => router.push(`media/${slug}`)}
            >
              <ItemInner className='flex flex-col gap-4 rounded-[48px] h-full overflow-hidden'>
                {item.thumbnail && (
                  <div className='h-[190px] overflow-hidden relative'>
                    <LazyLoadImage
                      className='w-full object-cover transition-transform duration-300 group-hover:scale-105'
                      src={item.thumbnail}
                      alt={item.title}
                    />
                    <CategoryTag className='absolute top-4 left-4'>
                      {item.category}
                    </CategoryTag>
                  </div>
                )}
                <div className='flex flex-col gap-4 p-6 flex-1 pt-0'>
                  <Meta className='flex items-center gap-4 text-sm text-gray-500'>
                    <span className='flex items-center gap-1'>
                      <FiUser size={14} />
                      {item.author}
                    </span>
                    <span className='flex items-center gap-1'>
                      <FiClock size={14} /> {`${item.date} • ${item.readTime}`}
                    </span>
                  </Meta>
                  <Title className='font-bold text-xl text-gray-800'>
                    {item.title}
                  </Title>
                  {item.body && (
                    <Text className='text-gray-600'>
                      {truncateText(item.body || '', 120)}
                    </Text>
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
