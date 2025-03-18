"use client";

import ContentBox from "@/components/ContentBox/ContentBox";
import Section from "@/components/section/section";

export default function ParaEmpresas() {
  return (
    <Section
      className='pt-[117px]'
      barstitle='on'
      title='<b>Para Empresas</b>'>
      <ContentBox
        reverse={true}
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

      <ContentBox
        reverse={true}
        className='pt-[3rem] lg:pt-[6rem]'
        title='<b>BD<span>MAP</span></b>'
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