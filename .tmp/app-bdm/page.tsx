"use client";

import Section from '@/components/section/section';
import Card from '@/components/card/card';
import { motion, Variants } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function AppDownloadPage() {
  const cardVariants: Variants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 50,
      rotate: -10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  }

  return (
    <>
      <Section
        backgroundattachment='fixed'
        backgroundimage='/img/bg-app-bdm.png'
        className="min-h-[100vh] flex items-center"
      >
        <div className="m-auto text-center">
          <LazyLoadImage src="/img/text-hero-app.svg" alt="BDM Digital" />
        </div>
      </Section>
      <Section
        helper='+ 50.000 downloads & contando'
        title='<b>Sem taxas ocultas, conta 100% grátis.</b><br/>Sem barreiras para construir seu capital.'
        className='-mb-[6rem] lg:mb-0 overflow-hidden'>
        <div className="flex justify-between">
          <div className='flex flex-col gap-[84px] pt-20'>
            <Card
              image='/img/app-1.png'
              title="Obtenha seu cartão <br> BDM de forma gratuíta"
              text="Não é necessário histórico de crédito, <br> verificação de crédito ou depósito mínimo."
              gap={4}
            />
            <Card
              image='/img/app-2.png'
              title="Consiga comprar e vender <br> BDM com desconto"
              text="Com o Mercado BDM você <br> consegue utilizar o saldo de sua <br> conta BDM Digital para comprar e <br> vender ativos com desconto."
              gap={4}
            />
          </div>

          <motion.div
            className='flex-1 hidden xl:flex justify-center items-center'
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.8 }}
          >
            <motion.div variants={cardVariants}>
              <LazyLoadImage
                src="/img/smartphone2-appbdm.png"
                alt="App Interface"
                className="m-auto max-w-[80%]"
              />
            </motion.div>
          </motion.div>


          <div className='flex flex-col gap-[84px]  pt-20'>
            <Card
              image='/img/app-3.png'
              title="Transações Ilimitadas"
              text="Envie e Receba valores sem limitações <br> ou restrições, no BDM Digital <br> você pode mais"
              gap={4}
            />
            <Card
              image='/img/app-4.png'
              title="Disponível no Brasil <br> e fora dele"
              text="BDM Digital não está disponível <br> somente no Brasil, você poderá <br> pagar com BDM também na Europa!"
              gap={4}
            />
          </div>
        </div>
      </Section>
      <Section title='<b>Baixe já o app <span>BDM Digital</span></b>'>
        <div className='flex flex-col items-center gap-12 text-base lg:text-lg'>
          <LazyLoadImage
            className="inline-block"
            src="/img/download-now.png"
            alt="Disponível nas App Stores"
            width={950}
            height={600}
          />
          <ul className='font-light'>
            <li>Blockchain própria com Proof-of-Stake aprimorado: validações em segundos e mais de 100 serviços globais.</li>
            <li>Integração via API para e-commerce e sistemas empresariais. </li>
          </ul>
        </div>
      </Section>
    </>
  );
}