import styled from 'styled-components';
import { pxToRem } from '@/utils';
import { colors } from '@/assets/scss/colors';

export const Wrapper = styled.div`
  /* placeholder caso precise de estilos de container no futuro. */
`;

export const Title = styled.h2`
  color: ${colors.primary.bdm4}; /* Branco */
  font-weight: 800; /* extrabold */
  line-height: 1.25; /* leading-tight */
  font-size: ${pxToRem(36)}; /* text-4xl */

  @media (min-width: 768px) { /* md breakpoint */
    font-size: ${pxToRem(48)}; /* text-5xl */
  }
`;

export const Description = styled.p`
  color: ${colors.primary.bdm10}; 
  line-height: 1.625; /* leading-relaxed */
  font-size: ${pxToRem(18)}; /* text-lg */

  @media (min-width: 768px) { /* md breakpoint */
    font-size: ${pxToRem(20)}; /* text-xl */
  }
`;
