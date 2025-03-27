"use client";

import ContentBox from "@/components/ContentBox/ContentBox";
import Section from "@/components/section/section";
import { Numbers, Item, Heading, Text, BigTitle } from "./styles";
import CountUp from 'react-countup';
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function MercadoBDM() {
  return (
    <>
      <Section 
        barstitle='on' 
        backgroundimage='img/coins.png'
        backgroundattachment='fixed'
        title='<b>Mercado BDM</b>'
        className='pt-[117px]'>
          <div className='flex flex-wrap items-center pt-16 gap-20 2xl:gap-[297px] flex-col lg:flex-row'>
            <BigTitle className='leading-none flex-1 text-6xl lg:text-7xl 2xl:text-8xl'>
              <span>Compre</span> e<br /><span className='flex items-center'><LazyLoadImage className='hidden 2xl:inline-flex' src='img/compre-e-venda.png' />Venda</span>
            </BigTitle>
            <Numbers className='flex lg:flex-col gap-12 flex-1 ms-auto w-full lg:w-auto'>
              <Item className='flex flex-col gap-2'>
                <Heading className='flex flex-col leading-none gap-1 text-4xl xl:text-6xl'><CountUp end={20} prefix='+' suffix='%' /> <small className='text-lg'>de desconto</small></Heading>
                <Text className='text-base'>Você pode vender ou comprar BDMs com descontos</Text>
              </Item>
              <Item className='flex flex-col gap-2'>
                <Heading className='flex flex-col leading-none gap-1 text-4xl xl:text-6xl'><CountUp prefix='+$' end={1.7} decimals={1} suffix='M' /> <small className='text-lg'>Sendo negociado </small></Heading>
                <Text className='text-base'>Acesse o mercado e veja todas as negociações que estão disponíveis</Text>
              </Item>
              <Item className='flex flex-col gap-2'>
                <Heading className='flex flex-col leading-none gap-1 text-4xl xl:text-6xl'><CountUp end={58} suffix='%' /></Heading>
                <Text className='text-base'>Prefere comprar via mercado BDM</Text>
              </Item>
            </Numbers>
          </div>
      </Section>
      <Section className='lg:-mb-[6rem]'>
        <ContentBox 
          className='pt-[3rem] lg:pt-[6rem]'
          title='<b><span>Mercado</span> BDM</b>'
          img='/img/mercado-bdm.png'
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

        <ContentBox 
          className='pt-[3rem] lg:pt-[6rem]'
          reverse={true}
          title='<b><span>Ofertas</span></b>'
          img='/img/ofertas.png'
          text='
            <ul>
              <li>Cadastre sua oferta pública ou privada</li>
              <li>Visualize todas as informações sobre cotação, ganhos e descontos na própria plataforma</li>
            </ul>
          '
          url='#'
          btnLabel='Cadastrar Oferta'
          btnClass='--primary inline-block me-auto'
          btnAnimation='pulse' />
      </Section>
    </>
  );
}