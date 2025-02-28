import styled from 'styled-components';
import { pxToRem } from "@/utils";

export const Container = styled.button`
  padding: ${pxToRem(17)} ${pxToRem(30)};
  border-radius: 4px;
  font-weight: 700;
  font-size: ${pxToRem(18)};
  text-align: center;
  cursor: pointer;
  &.--primary {
    background: var(--Dourado-Exchange-Dourado-Boto, linear-gradient(93deg, ${props => props.theme._colors.primary.bdm1} 1.67%, ${props => props.theme._colors.primary.bdm2} 83.65%));
  }
`;