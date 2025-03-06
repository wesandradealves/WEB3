import styled from 'styled-components';
import { pxToRem } from "@/utils";
import { colors } from '@/assets/scss/colors';
import { breakpoints } from '@/assets/scss/breakpoints';

export const Container = styled.footer`
  background: ${colors.primary.bdm0};
  padding: ${pxToRem(40)} 0;
  margin-top: auto;

  .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: ${pxToRem(30)};

    @media (max-width: ${breakpoints.md}) {
      flex-direction: column;
      gap: ${pxToRem(40)};
    }
  }
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(20)};
  width: 40%;
`;

export const RightSections = styled.div`
  display: flex;
  gap: ${pxToRem(60)};

  @media (max-width: ${breakpoints.md}) {
    width: 100%;
    justify-content: space-between;
  }

  @media (max-width: ${breakpoints.sm}) {
    flex-direction: column;
    gap: ${pxToRem(30)};
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: ${pxToRem(20)};
  
  a {
    color: #000;
    transition: opacity 0.3s;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const LegalText = styled.div`
  font-size: ${pxToRem(14)};
  line-height: 1.5;
  text-align: left;
`;

export const FooterSection = styled.div`
  min-width: ${pxToRem(150)};

  h4 {
    font-weight: 700;
    margin-bottom: ${pxToRem(10)};
    font-size: ${pxToRem(18)};
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: ${pxToRem(8)};

      a {
        color: #000;
        text-decoration: none;
        font-size: ${pxToRem(14)};

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;