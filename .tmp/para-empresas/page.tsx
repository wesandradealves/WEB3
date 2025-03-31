"use client";

import ContentBox from "@/components/ContentBox/ContentBox";
import Section from "@/components/section/section";
import Slider from "react-slick";
import { Item, ItemInner, Title, Subtitle, SlideWrapper } from "./style";
import { SliderTypo } from "./typo";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function ParaEmpresas() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    centerMode: false,
    arrows: false,
    initialSlide: 0,
    slidesToScroll: 1
  };

  const slide: SliderTypo[] = [
    {
      image: 'img/integracao-bdmap.png',
      title: 'mais clientes',
      backtext: 'maior visibilidade',
      subtitle: 'melhores receitas'
    },    {
      image: 'img/integracao-bdmap.png',
      title: 'mais clientes',
      backtext: 'maior visibilidade',
      subtitle: 'melhores receitas'
    }
  ];

  return (
    <Section
      className='pt-[117px] lg:-mb-[6rem]'
      barstitle='on'
      title='<b>Para Empresas</b>'>
      <ContentBox
        reverse={true}
        img='/img/bdm-pos.png'
        className='pt-[3rem] lg:pt-[6rem]'
        title='<b><span>BDM</span> POS</b>'
        text='
          <ul>
            <li>Encontre negócios locais e globais que aceitam BDM Digital em tempo real.</li>
            <li>Sua empresa no mapa: aumente sua visibilidade para milhares de usuários.</li>
          </ul>
        '
        url='#'
        btnLabel='Saiba Mais'
        btnClass='--primary inline-block me-auto'
        btnAnimation='pulse' />

      {slide && slide.length && (<SlideWrapper className='relative'><Slider {...settings}>
        {slide.map((item, index) => {
          return (
            <Item
              key={index}
              className='pt-5'
            >
              <ItemInner className='flex flex-col gap-20 lg:gap-[6rem]'>
                {(item.title || item.subtitle) && (<div className='flex flex-col items-center uppercase gap-4'>
                  {item.title && (<Title data-backtext={item.backtext} className='text-4xl xl:text-6xl font-normal leading-none text-center relative flex flex-col-reverse'>{item.title}</Title>)}
                  {item.subtitle && (<Subtitle className='font-bold text-center p-2 pt-1 pb-1 text-xl lg:text-2xl'>{item.subtitle}</Subtitle>)}
                </div>)}

                {item.image && (<LazyLoadImage className='w-full object-fit' src={item.image} alt={item.title} />)}
              </ItemInner>
            </Item>
          );
        })}
      </Slider></SlideWrapper>)}

      <ContentBox
        reverse={true}
        className='pt-[3rem] lg:pt-[6rem]'
        title='<b>BD<span>MAP</span></b>'
        img='/img/bdm-map.png'
        text='
          <ul>
            <li>Encontre e seja encontrado: negócios locais e globais que aceitam BDM Digital em tempo real.</li>
          </ul>
        '
        url='#'
        btnLabel='Cadastrar Oferta'
        btnClass='--primary inline-block me-auto'
        btnAnimation='pulse' />

      <ContentBox
        className='pt-[3rem] lg:pt-[6rem]'
        title='<b>BDM<span>PAY</span></b>'
        img='/img/bdm-pay.png'
        text='
          <ul>
            <li>Encontre negócios locais e globais que aceitam BDM Digital em tempo real.</li>
            <li>Sua empresa no mapa: aumente sua visibilidade para milhares de usuários.</li>
          </ul>
        '
        url='#'
        btnLabel='Cadastrar Oferta'
        btnClass='--primary inline-block me-auto'
        btnAnimation='pulse' />
    </Section>
  );
}