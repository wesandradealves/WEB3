"use client";

import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Container, Title, Text, Item, ItemInner } from './styles';
import { Props } from './typo';
import React from "react";
import Slider from "react-slick";
import { useRouter } from 'next/navigation';
import slugify from 'slugify';
import { useMedia } from '@/context/media';

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
              className='h-full cursor-pointer'
              key={index}
              onClick={() => router.push(`media/${slug}`)}
            >
              <ItemInner className='flex flex-col gap-4 rounded-[48px] h-full overflow-hidden justify-start items-start'>
                {item.thumbnail && (<LazyLoadImage className='w-full object-fit' src={item.thumbnail} alt={item.title} />)}
                <div className='flex flex-col gap-4 p-3 pb-8 mt-auto flex-1'>
                  <Title className='font-bold'>{item.title}</Title>
                  {item.body && (<Text dangerouslySetInnerHTML={{ __html: truncateText(item.body || '', 80) }} className='text-center'/>)}
                </div>
              </ItemInner>
            </Item>
          );
        }))}
      </Slider>
    </Container>
  );
}
