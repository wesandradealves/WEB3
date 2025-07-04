// src/components/sections/AboutUsSection.tsx
'use client';

import React from 'react';
import { AboutUsSectionProps } from './typo';
import FeatureCard from './FeatureCard';

 
const AboutUsSection: React.FC<AboutUsSectionProps> = ({ title, mainDescription, featureCards }) => {
  return (
    <section className="w-full bg-darkBackground text-white py-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-12">
        {/* Título "Quem Somos nós" */}
        <div className="md:w-1/3">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            {title}
          </h2>
        </div>

        {/* Descrição Principal */}
        <div className="md:w-2/3">
          <p className="text-lg md:text-xl text-lightText leading-relaxed">
            {mainDescription}
          </p>
        </div>
      </div>

      {/* Grid de Feature Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
        {featureCards.map((card, index) => (
          <FeatureCard
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
            lineColor={card.lineColor}
          />
        ))}
      </div>
    </section>
  );
};

export default AboutUsSection;
