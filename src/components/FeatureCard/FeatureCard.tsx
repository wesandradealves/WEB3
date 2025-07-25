'use client';

import React from 'react';
import Image from 'next/image';
import { StyledFeatureCardContainer, VerticalLine } from './styles';
import { FeatureCardProps } from './typo';

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, lineColor }) => {
  return (
    <StyledFeatureCardContainer>
      <VerticalLine lineColor={lineColor} />
      <div className="flex flex-col h-full">
        <div className="mb-4">
          <Image src={icon} alt={`${title} Icon`} width={36} height={36} />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 text-base">
          {description}
        </p>
      </div>
    </StyledFeatureCardContainer>
  );
};

export default FeatureCard;
