'use client';

import React from 'react';
import Image from 'next/image';
import Button from '@/components/button/button';
import { HeroSectionProps } from './typo';

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  description,
  buttonText,
  onButtonClick,
  backgroundImage,
  buildingImage,
}) => {
  return (
    <section className="
      relative w-full h-[900px] flex items-center justify-center overflow-hidden bg-darkBackground text-white
      md:h-[900px] md:flex-row md:items-center md:justify-center
      flex-col h-auto pt-16 pb-16 px-4  // Mobile: flex-col, h-auto, padding vertical
    ">
      {/* Imagem do Prédio (esquerda) */}
      <div className="
        absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] overflow-hidden -ml-[200px] rounded-lg
        md:w-[600px] md:h-[600px] md:-ml-[300px] 
        lg:w-[700px] lg:h-[700px] lg:-ml-[350px]
        hidden md:block
      ">
        <Image
          src={buildingImage}
          alt="Dourado Cash Building"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Imagem da Mulher (direita) */}
      <div className="
        absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] overflow-hidden -mr-[200px] rounded-lg
        md:w-[600px] md:h-[600px] md:-mr-[300px] 
        lg:w-[700px] lg:h-[700px] lg:-mr-[350px]
        hidden md:block // Oculta no mobile, mostra no desktop
      ">
        <Image
          src={backgroundImage}
          alt="Woman with Hat"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* VERSÃO MOBILE DAS IMAGENS*/}
      <div className="
        relative z-0 w-full flex flex-col items-center justify-center gap-8 mb-8 // Container para as imagens no mobile
        md:hidden
      ">
        <div className="w-64 h-64 overflow-hidden rounded-lg"> {/* Imagem do Prédio no Mobile */}
          <Image
            src={buildingImage}
            alt="Dourado Cash Building"
            width={256}
            height={256}
            objectFit="cover"
            quality={100}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="w-64 h-64 overflow-hidden rounded-lg"> {/* Imagem da Mulher no Mobile */}
          <Image
            src={backgroundImage}
            alt="Woman with Hat"
            width={256}
            height={256}
            objectFit="cover"
            quality={100}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Conteúdo Central (Texto e Botão) */}
      <div className="
        relative z-10 flex flex-col items-center text-center w-full max-w-2xl mx-auto px-4 py-12
        mt-0
        md:mt-0
        sm:mt-0
        lg:mt-0
      ">
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