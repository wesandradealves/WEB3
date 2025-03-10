import styled from 'styled-components';
import { colors } from '@/assets/scss/colors';

export const Container = styled.footer`
  .custom-underline {
    position: relative;
    &:after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0;
      height: 1px;
      background:  ${colors.primary.bdm4};
      transition: width 0.3s ease;
    }
    &:hover:after {
      width: 100%;
    }
  }
`;