// style.tsx
import styled from 'styled-components';
import { pxToRem } from '@/utils';

export const SmallHighlight = styled.p`
  font-size: ${pxToRem(12)} !important;
  color: ${props => props.theme._colors.primary.bdm3} !important;
  font-weight: 200;
  text-transform: uppercase;
  letter-spacing: 1.5px;
`;