'use client';

import React from 'react';
import HeroSection from '@/components/about-us/HeroSection';
import AboutUsSection from '@/components/about-us/AboutUsSection';
import { FeatureCardProps } from '@/components/about-us/typo';

const HomePage: React.FC = () => {
  const heroData = {
    title: 'Sobre o BDM Digital',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Aenean iaculis. Quisque condimentum. Etiam sit amet risus. Sed vitae mi libero. Curabitur diam quam, feugiat vitae, ultricies eu, luctus eu, urna. Sed ligula. Sed tincidunt, ante nec bibendum rutrum, magna erat faucibus libero, in convallis dolor sem in dui. In vel dolor. Ut eu odio justo.',
    buttonText: 'Entre em contato',
    backgroundImage: '/img/about-us-img-direita.png', 
    buildingImage: '/img/about-us-img-esquerda.png',   };

  const featureCardsData: FeatureCardProps[] = [
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
  ];

  const aboutUsData = {
    title: 'Quem Somos nós',
    mainDescription:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    featureCards: featureCardsData,
  };

  const handleContactClick = () => {
    alert('Botão "Entre em contato" clicado!');
  };

  return (
    <>
      <HeroSection
        title={heroData.title}
        description={heroData.description}
        buttonText={heroData.buttonText}
        onButtonClick={handleContactClick}
        backgroundImage={heroData.backgroundImage}
        buildingImage={heroData.buildingImage}
      />
      <AboutUsSection
        title={aboutUsData.title}
        mainDescription={aboutUsData.mainDescription}
        featureCards={aboutUsData.featureCards}
      />
    </>
  );
};

export default HomePage;