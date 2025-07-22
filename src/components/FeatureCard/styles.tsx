import styled from 'styled-components';
import { pxToRem } from '@/utils';
import { colors } from '@/assets/scss/colors';

interface VerticalLineProps {
  lineColor?: 'gold' | 'darkGold';
}

export const StyledFeatureCardContainer = styled.div`
  position: relative;
  background-color: rgba(255, 255, 255, 0.05);
  height: 100%;
  padding: ${pxToRem(32)}; 
  padding-left: ${pxToRem(24)}; 
  border-radius: ${pxToRem(12)}; 
`;

export const VerticalLine = styled.div<VerticalLineProps>`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: ${pxToRem(4)};
  background-color: ${({ lineColor }) =>
    lineColor === 'gold' ? colors.primary.bdm3 : colors.primary.bdm1};
  
  border-radius: ${pxToRem(4)};
`;

export const Title = styled.h3`
  font-weight: bold;
  color: ${colors.primary.bdm4}; 
  margin-bottom: ${pxToRem(8)};
  font-size: ${pxToRem(24)};
`;

export const Description = styled.p`
  color: ${colors.primary.bdm10}; 
  line-height: 1.6;
  font-size: ${pxToRem(16)};
`;
