import styled from 'styled-components';
import { pxToRem } from '@/utils';

export const Item = styled.article`
 
`; 

export const ItemInner = styled.div`
    background-color: ${props => props.theme._colors.primary.bdm8};
`; 

export const Title = styled.h3`
    font-size: ${pxToRem(20)};
    color: ${props => props.theme._colors.primary.bdm3};
`; 

export const Text = styled.p`
`; 

export const Container = styled.div`
    ${Text} {
        font-size: ${pxToRem(14)}
    }
    .slick {
        &-list {
        .slick-track {
            margin: 0;
            display: flex;
            gap: 31px;
            align-items: stretch;
            .slick-slide {
            height: auto;
                > div {
                    height: 100%
                }
            }
        }
        }
    }
`; 

export const Meta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${pxToRem(12)};
  color: ${props => props.theme._colors.primary.bdm4};};
`;

export const CategoryTag = styled.span`
  background: ${props => props.theme._colors.primary.bdm8};
  color: ${props => props.theme._colors.primary.bdm3};
  padding: ${pxToRem(4)} ${pxToRem(12)};
  border-radius: ${pxToRem(20)};
  font-size: ${pxToRem(12)};
  font-weight: 600;
`;

export const NewsContent = styled.div`
  /* Estilos específicos para o texto longo */
  .prose {
    h2 {
      font-size: ${pxToRem(28)};
      color: ${props => props.theme._colors.primary.bdm3};
      margin: 2rem 0;
    }

    h3 {
      font-size: ${pxToRem(22)};
      color: ${props => props.theme._colors.primary.bdm3};
      margin: 1.5rem 0;
    }

    p {
      line-height: 1.8;
      margin-bottom: 1.5rem;
      color: ${props => props.theme._colors.primary.bdm4};
    }

    ul {
      margin: 1rem 0;
      padding-left: 1.5rem;
      
      li {
        margin: 0.5rem 0;
        &::marker {
          color: ${props => props.theme._colors.primary.bdm3};
        }
      }
    }

    img {
      border-radius: ${pxToRem(16)};
      margin: 2rem 0;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }

    @media (max-width: ${props => props.theme._breakpoints.md}) {
      h2 {
        font-size: ${pxToRem(24)};
      }
      
      h3 {
        font-size: ${pxToRem(20)};
      }
      
      p {
        font-size: ${pxToRem(16)};
      }
    }
  }
`;