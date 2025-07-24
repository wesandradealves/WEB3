'use client';

import React from 'react';
import { Wrapper, Title, Description } from './styles';
import { ContentHeaderProps } from './typo';

const ContentHeader: React.FC<ContentHeaderProps> = ({ title, description, className }) => {
  return (
    <Wrapper className={`flex flex-col md:flex-row items-start md:items-center justify-between gap-12 ${className}`}>
      <div className="md:w-1/3">
        <Title>{title}</Title>
      </div>
      <div className="md:w-2/3">
        <Description>{description}</Description>
      </div>
    </Wrapper>
  );
};

export default ContentHeader;
