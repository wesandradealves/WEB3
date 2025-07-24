'use client';

import React from 'react';
import Hero from '@/components/hero'; 
import FeatureCard from '@/components/FeatureCard'; // Caminho corrigido após refatoração anterior
import { FeatureCardProps } from '@/components/FeatureCard/typo'; // Caminho corrigido
import ContentHeader from '@/components/ContentHeader'; // Nosso novo componente

const AboutUsPage: React.FC = () => {
  const heroData = {
    title: 'Sobre o BDM Digital',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Aenean iaculis. Quisque condimentum. Etiam sit amet risus. Sed vitae mi libero. Curabitur diam quam, feugiat vitae, ultricies eu, luctus eu, urna. Sed ligula. Sed tincidunt, ante nec bibendum rutrum, magna erat faucibus libero, in convallis dolor sem in dui. In vel dolor. Ut eu odio justo.',
    btnLabel: 'Entre em contato',
    url: '#contact',
    leftImage: {
        src: '/img/about-us-img-esquerda.png',
        alt: 'Dourado Cash Building'
    },
    rightImage: {
        src: '/img/about-us-img-direita.png',
        alt: 'Woman with Hat'
    }
  };

  const aboutUsData = {
    title: 'Quem Somos nós',
    mainDescription:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    featureCards: [
      {
        icon: '/img/rocket-icon.png',
        title: 'DESCENTRALIZAÇÃO',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,',
        lineColor: 'gold',
      },
      {
        icon: '/img/lamp-icon.png',
        title: 'INOVAÇÃO E SEGURANÇA',
        description:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,',
        lineColor: 'darkGold', 
      },
    ] as FeatureCardProps[],
  };

  return (
    <main>
      <Hero
        title={heroData.title}
        text={heroData.text}
        btnLabel={heroData.btnLabel}
        url={heroData.url}
        leftImage={heroData.leftImage}
        rightImage={heroData.rightImage}
      />

      <section className="w-full bg-black text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          
          <ContentHeader 
            title={aboutUsData.title}
            description={aboutUsData.mainDescription}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {aboutUsData.featureCards.map((card, index) => (
              <FeatureCard
                key={index}
                icon={card.icon}
                title={card.title}
                description={card.description}
                lineColor={card.lineColor}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUsPage;
