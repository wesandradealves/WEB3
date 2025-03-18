"use client";

import ContentBox from "@/components/ContentBox/ContentBox";
import Section from "@/components/section/section";

export default function Clientes() {
  return (
    <Section 
      className='pt-[117px]' 
      barstitle='on' 
      title='<b>Clientes</b>'>
      <ContentBox 
        className='pt-[3rem] lg:pt-[6rem]'
        reverse={true}
        img='/img/negocios-1.png'
        title='<b><span>Empresas</span> e <span>Clientes</span></b>'
        text='
          <ul>
            <li>Seus clientes e fornecedores também podem utilizar o <span>BDM DIGITAL</span>.</li>
            <li>O aquecimento do comércio incentiva uma maior movimentação de valores, criando um ciclo completo onde o <span>BDM</span> circula e volta para o seu negócio.</li>
          </ul>
        '
        url='#'
        btnLabel='Cadastrar Oferta'
        btnClass='--primary inline-block me-auto'
        btnAnimation='pulse' />
    </Section>
  );
}