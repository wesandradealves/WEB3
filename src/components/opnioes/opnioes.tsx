"use client";

import { Container, Title, Text, Rating, Rate, Item, ItemInner } from './styles';
import { Props } from './typo';
import { Data } from './typo';
import { FaStar, FaRegStar } from 'react-icons/fa';
import React from "react";
import Slider from "react-slick";

const truncateText = (text: string, limit: number) => {
  if (text.length <= limit) return text;
  return text.substring(0, limit) + '...';
};

export default function Opnioes({ data = [{
  title: 'Colina Mandy',
  rating: 5,
  text: 'Does exactly what it says. Clear to read and understand. This is now the second iPhone we’ve used it on and would certainly recommend this app.'
}, {
  title: 'Jennifer Black',
  rating: 3,
  text: 'Love the ease and efficiency. Awesome app. Very informative and insightful if wanting to know more about your device. The added breach check.is a great bonus. Check any email of they’ve ever been named in a data breach from years ago. Sweet tool. Love it highly recommend.'
}, {
  title: 'John Doe',
  rating: 4,
  text: 'Great app with lots of useful features. The interface is user-friendly and the performance is excellent. Highly recommended!'
}, {
  title: 'Jane Smith',
  rating: 2,
  text: 'The app is okay, but it has some bugs that need to be fixed. It crashes occasionally and some features do not work as expected.'
}, {
  title: 'Alice Johnson',
  rating: 5,
  text: 'Fantastic app! It has everything I need and more. The customer support is also very responsive and helpful.'
}, {
  title: 'Bob Brown',
  rating: 1,
  text: 'Terrible experience. The app is slow and unresponsive. I would not recommend it to anyone.'
}, {
  title: 'Charlie Davis',
  rating: 4,
  text: 'Good app overall. It has some minor issues, but they are not deal-breakers. I use it daily and it works well for me.'
}, {
  title: 'Diana Evans',
  rating: 5,
  text: 'Excellent app! It is very reliable and has a lot of great features. I am very satisfied with it.'
}] as Data[], className }: Props) {

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    centerMode: false,
    arrows: false,
    initialSlide: 0,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <Container className={`${className}`}>
      <Slider {...settings}>
        {data.map((item, index) => (
          <Item title={item.text} className='h-full cursor-pointer' key={index}>
            <ItemInner className='flex flex-col gap-4 bg-white rounded-[48px] h-full'>
              <Rating className='flex items-center gap-2'>
                {[...Array(5)].map((_, i) => (
                  <Rate key={i}>
                    {i < item.rating ? <FaStar /> : <FaRegStar />}
                  </Rate>
                ))}
              </Rating>
              {item.text && (<Text className='flex-1'>{truncateText(item.text, 80)}</Text>)}
              <Title className='mt-auto'>{item.title}</Title>
            </ItemInner>
          </Item>
        ))}
      </Slider>
    </Container>
  );
}