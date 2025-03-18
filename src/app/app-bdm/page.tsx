"use client";

import Section from '@/components/section/section';
import Card from '@/components/card/card';
import Image from 'next/image';

export default function AppDownloadPage() {
  return (
    <PageLayout>
      {/* Seção 1 - Hero com Background */}
      <Section 
        title=""
        background="/img/bg-app-bdm.png"
        className="relative min-h-[70vh] flex items-center"
      >
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-primary-bdm3">INFINITAS</span> OPORTUNIDADES
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl">
            Sem taxas ocultas, conta 100% grátis.<br/>
            Sem barreiras para construir seu capital.
          </p>
        </div>
      </Section>

      {/* Seção 2 - Imagem Central com Informações */}
      <Section title="" className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
          {/* Textos Esquerda */}
          <div className="space-y-8">
            <Card
              title="<span>Obtenha seu cartão <br> BDM de forma gratuíta</span>"
              text="Não é necessário histórico de crédito, <br> verificação de crédito ou depósito mínimo."
              gap={4}
            />
            <Card
              title="Segurança Máxima"
              text="Certificação digital de última geração"
              gap={4}
            />
          </div>

          {/* Imagem Central */}
          <div className="absolute left-1/2 -translate-x-1/2 -translate-y-12 hidden md:block">
            <Image
              src="/img/smartphone2-appbdm.png"
              alt="App Interface"
              width={1000}
              height={1000}
              className="mx-auto"
            />
          </div>

          {/* Textos Direita */}
          <div className="space-y-8">
            <Card
              title="Transações Ilimitadas"
              text="Envie e receba valores sem restrições"
              gap={4}
            />
            <Card
              title="Suporte 24/7"
              text="Atendimento especializado sempre disponível"
              gap={4}
            />
          </div>
        </div>
      </Section>

      {/* Seção 3 - Download do App */}
      <Section title="Download do App" backgroundcolor="primary-bdm0" className="py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Baixe já o app BDM Digital
        </h2>
        <div className="max-w-2xl mx-auto">
          <Image
            src="/img/app-store-badges.png"
            alt="Disponível nas App Stores"
            width={600}
            height={200}
            className="mx-auto"
          />
        </div>
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