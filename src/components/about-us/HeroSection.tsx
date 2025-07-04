'use client';

import React from 'react';
import Image from 'next/image';
import Button from '../button/button';
import { HeroSectionProps } from './typo';

/**
 * @component HeroSection
 * @description Seção principal de destaque da página.
 * Utiliza Tailwind CSS para layout responsivo e posicionamento.
 * @param {HeroSectionProps} props - As propriedades da seção Hero.
 * @returns {JSX.Element} O elemento da seção Hero.
 */
const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  description,
  buttonText,
  onButtonClick,
  backgroundImage,
  buildingImage,
}) => {
   return (
    <section className="relative w-full h-[900px] flex items-center justify-center overflow-hidden bg-darkBackground text-white">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] lg:w-[700px] lg:h-[700px] overflow-hidden -ml-[200px] md:-ml-[300px] lg:-ml-[350px] rounded-lg">
        <Image
          src={buildingImage}
          alt="Dourado Cash Building"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="rounded-lg shadow-lg"
        />
      </div>

      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] lg:w-[700px] lg:h-[700px] overflow-hidden -mr-[200px] md:-mr-[300px] lg:-mr-[350px] rounded-lg">
        <Image
          src={backgroundImage} // imagem da direita
          alt="Woman with Hat"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Conteúdo Central (Texto e Botão) */}
      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-2xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-white">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-lightText mb-8 leading-relaxed">
          {description}
        </p>
        <Button onClick={onButtonClick}>{buttonText}</Button>
      </div>
    </section>
  );
};


export default HeroSection;
