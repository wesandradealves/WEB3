import styled from 'styled-components';
import { pxToRem } from '@/utils';
import { _colors, _breakpoints } from '@/assets/scss/variables';

export const Container = styled.div`
  color: ${_colors.primary.bdm3};
`;

export const FaqItem = styled.div`
  background: ${_colors.primary.bdm4};
  border-radius: ${pxToRem(12)};
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);

  &:hover {
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  }

  &.active {
    background: ${_colors.primary.bdm4};
  }
`;

export const Question = styled.h3`
  font-weight: 700;
  font-size: ${pxToRem(18)};
  line-height: 1.4;
  color: black;

  @media (min-width: ${_breakpoints.xxl}) {
    font-size: ${pxToRem(20)};
  }
`;

export const Answer = styled.div<{ $isOpen: boolean }>`
  max-height: 0;
  overflow: hidden;
  transition: all 0.3s ease;
  color: ${({ $isOpen }) => $isOpen ? _colors.primary.bdm5 : 'transparent'};

  ${({ $isOpen }) => $isOpen && `
    max-height: 500px;
    color: ${_colors.primary.bdm5};
  `}
`;

export const ArrowIcon = styled.span<{ $isOpen: boolean }>`
  display: inline-block;
  width: 24px;
  height: 24px;
  transition: transform 0.3s ease;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23000000'%3E%3Cpath d='M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z'/%3E%3C/svg%3E");
  
  ${({ $isOpen }) => $isOpen && `
    transform: rotate(180deg);
  `}
`;