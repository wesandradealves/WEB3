"use client";

import Section from '@/components/section/section';
import Card from '@/components/card/card';
import Image from 'next/image';
import { SmallHighlight } from './style';

export default function AppDownloadPage() {
  return (
    <PageLayout>
      {/* Seção 1 - Hero com Background */}
      <Section 
        title=""
        backgroundimage='/img/bg-app-bdm.png'
        className="relative min-h-[100vh] flex items-center"
      >
        <div className="relative z-10 mx-auto text-center">
         <Image src="/img/text-hero-app.svg" alt="BDM Digital" width={1250} height={1250} />
          
        </div>
      </Section>


      {/* Seção 2 - Imagem Central com Informações */}
      <Section title="" className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
          {/* Textos Esquerda */}
          <div className="space-y-8">
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

          {/* Imagem Central */}
          <div className="absolute left-1/2 -translate-x-1/2 -translate-y-12 hidden md:block">
          <SmallHighlight className="text-center mb-2">
              +50.000 DOWNLOADS & CONTANDO
            </SmallHighlight>
          <p className="text-xl md:text-2x2 max-w-2x2 mx-auto text-center">
            <b>Sem taxas ocultas, conta 100% grátis.</b><br/>
            Sem barreiras para construir seu capital.
          </p>
            <Image
              src="/img/smartphone2-appbdm.png"
              alt="App Interface"
              width={1000}
              height={1000}
              className="mx-auto"
            />
          </div>

          {/* Textos Direita */}
          <div className="space-y-8 md:ml-auto md:max-w-[500px] md:text-right">
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

      {/* Seção 3 - Download do App */}
      <Section title="" backgroundcolor="primary-bdm0" className="py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
        Baixe já o app <span className="text-yellow-500">BDM Digital</span>
        </h2>
        <div className="max-w-2x2 mx-auto">
          <Image
            src="/img/download-now.png"
            alt="Disponível nas App Stores"
            width={950}
            height={600}
            className="mx-auto"
          />
          <br/>
        </div>
        <li>Blockchain própria com Proof-of-Stake aprimorado: validações em segundos e mais de 100 serviços globais.</li>
        <li>Integração via API para e-commerce e sistemas empresariais. </li>
      </Section>
    </PageLayout>
  );
}

// Componente Layout da Página
function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full">
      {children}
      <style jsx global>{`
        /* Estilos para overlay do background */
        section[background]::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7));
          z-index: 0;
        }
      `}</style>
    </div>
  );
}