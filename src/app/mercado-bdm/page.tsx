"use client";

import ContentBox from "@/components/ContentBox/ContentBox";
import Section from "@/components/section/section";

export default function MercadoBDM() {
  return (
    <Section 
      className='pt-[117px]' 
      barstitle='on' 
      title='<b>Mercado BDM</b>'>
      <ContentBox 
        className='pt-[3rem] lg:pt-[6rem]'
        title='<b><span>Mercado</span> BDM</b>'
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
  );
}