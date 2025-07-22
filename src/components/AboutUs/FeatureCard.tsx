'use client';

import React from 'react';
import Image from 'next/image';
import { StyledFeatureCardContainer, VerticalLine } from './styles';
import { FeatureCardProps } from './typo';

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, lineColor }) => {
  return (
    <StyledFeatureCardContainer>
      <VerticalLine lineColor={lineColor} />

      {/* Icon */}
      <div className="mb-4 ml-4">
        <Image src={icon} alt={`${title} Icon`} width={36} height={36} />
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-white mb-2 ml-4">{title}</h3>

      {/* Description */}
      <p className="text-lightText text-base ml-4">
        {description}
      </p>
    </StyledFeatureCardContainer>
  );
};

export default FeatureCard;
  