import styled, { css } from 'styled-components';
import { pxToRem } from "@/utils";

export interface Typo {
  radius?: number;
}

export const Container = styled.button<Typo>`
  padding: ${pxToRem(17)} ${pxToRem(30)};
  border-radius: 4px;
  font-size: ${pxToRem(18)};
  text-align: center;
  cursor: pointer;
  ${({ radius }) => radius && css`
      border-radius: ${radius}px;
  `}  
  &.--primary {
    color: black;
    background: var(--Dourado-Exchange-Dourado-Boto, linear-gradient(93deg, ${props => props.theme._colors.primary.bdm1} 1.67%, ${props => props.theme._colors.primary.bdm2} 83.65%));
  }
  &.--secondary {
    color: white;
    border: 1px white solid;
    background: transparent;
  }
`;