"use client";

import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Container, Title, Text, Item, ItemInner } from './styles';
import { Props } from './typo';
import { Data } from './typo';
import React from "react";
import Slider from "react-slick";
import { useRouter } from 'next/navigation';
import slugify from 'slugify';

const truncateText = (text: string, limit: number) => {
  if (text.length <= limit) return text;
  return text.substring(0, limit) + '...';
};

export default function Media({ data = [
  {
    id: 0,
    title: 'Após ultrapassar InfoMoney, Exame e InvestNews, BM&C News é o maior canal brasileiro sobre notícias do mercado',
    text: 'No segmento de finanças, canal deixou para trás seus principais concorrentes como: InfoMoney (29 milhões de visualizações) Exame (33 milhões) e InvestNews, de Dony De Nuccio e Samy Dana, que registravam, na segunda-feira (7) 35 milhões de visualizações.',
    img: 'img/thumb.png'
  },
  {
    id: 1,
    title: 'Na vanguarda do setor, BDM, a "moeda de zigurats", será beneficiada com nova "lei das criptomoedas"',
    text: 'Com diversos estabelecimentos e serviços utilizando BDM Digital como forma de pagamento, o giro da economia local gera prosperidade financeira para a população.',
    img: 'img/thumb-2.png'
  },
  {
    id: 2,
    title: 'BDM Digital: conheça a moeda que está mudando a vida de muitas pessoas',
    text: 'Com diversos estabelecimentos e serviços utilizando BDM Digital como forma de pagamento, o giro da economia local gera prosperidade financeira para a população.',
    img: 'img/thumb-3.png'
  }
] as Data[], className }: Props) {

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
        {data.map((item, index) => {
          const slug = slugify(item.title, { lower: true });
          return (
            <Item
              title={item.text}
              className='h-full cursor-pointer'
              key={index}
              onClick={() => router.push(`/${slug}`)}
            >
              <ItemInner className='flex flex-col gap-4 rounded-[48px] h-full overflow-hidden justify-start items-start'>
                {item.img && (<LazyLoadImage className='w-full object-fit' src={item.img} alt={item.title} />)}
                <div  className='flex flex-col gap-4 p-3 pb-8 mt-auto flex-1'>
                  <Title>{item.title}</Title>
                  {item.text && (<Text className='text-center'>{truncateText(item.text || '', 80)}</Text>)}
                </div>
              </ItemInner>
            </Item>
          );
        })}
      </Slider>
    </Container>
  );
}