import styled from 'styled-components';
import { pxToRem } from '@/utils';

export interface Typo {
  expanded?: boolean;
}

export const Container = styled.div`
  color: ${props => props.theme._colors.primary.bdm3}};
`;

export const FaqItem = styled.div`
  background: ${props => props.theme._colors.primary.bdm4};
  border-radius: ${pxToRem(12)};
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);

  &:hover {
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  }

  &.active {
    background: ${props => props.theme._colors.primary.bdm4};
  }
`;

export const Question = styled.h3`
  font-weight: 700;
  font-size: ${pxToRem(18)};
  line-height: 1.4;
  color: black;

  @media (min-width: ${props => props.theme._breakpoints.xxl}) {
    font-size: ${pxToRem(20)};
  }

  .icon {
    font-size: ${pxToRem(32)};
  }
`;

export const Answer = styled.div<Typo>`
  color: ${props => props.theme._colors.primary.bdm5}
`;