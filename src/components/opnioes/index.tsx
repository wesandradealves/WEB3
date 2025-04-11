"use client";

import { Container, Title, Text, Rating, Rate, Item, ItemInner } from './styles';
import { FaStar, FaRegStar } from 'react-icons/fa';
import React from "react";
import Slider from "react-slick";
import { ContentItem } from '@/services/ContentService';
export const truncateText = (text: string, limit: number) => {
  if (text.length <= limit) return text;
  return text.substring(0, limit) + '...';
};

const Opnioes = ({ data, classname }: { data: ContentItem[]; classname?: string }) => {
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
        breakpoint: 500,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <Container className={`${classname}`}>
      <Slider {...settings}>
        {data && (data.map((item, index) => (
          <Item title={item.title.rendered} className='h-full cursor-pointer' key={index}>
            <ItemInner className='flex text-base text-stone-900 p-9 flex-col gap-4 bg-white rounded-[48px] h-full'>
              {item.acf?.rating && (<Rating className='flex items-center gap-2 list-none'>
                {[...Array(Number(item.acf?.rating))].map((_, i) => (
                  <Rate className='text-base lg:text-xl' key={i}>
                    {i < item.acf?.rating ? <FaStar /> : <FaRegStar />}
                  </Rate>
                ))}
              </Rating>)}
              {item.content.rendered && (<Text 
                dangerouslySetInnerHTML={{ __html: item.content.rendered }}
                className='flex-1 pe-8 overflow-auto max-h-[140px] lg:max-h-[100px]
                [&::-webkit-scrollbar]:w-1
                [&::-webkit-scrollbar-track]:bg-transparent
                [&::-webkit-scrollbar-track]:ms-7
                [&::-webkit-scrollbar-track]:me-7
                [&::-webkit-scrollbar-track]:rounded-full
                [&::-webkit-scrollbar-thumb]:bg-yellow-500
                [&::-webkit-scrollbar-thumb]:rounded-full
                [&::-webkit-scrollbar-thumb]:cursor-move
              '/>)}
              <Title className='mt-auto font-bold'>{item.title.rendered}</Title>
            </ItemInner>
          </Item>
        )))}
      </Slider>
    </Container>
  );
}

Opnioes.expectsArrayData = true;
export default Opnioes;