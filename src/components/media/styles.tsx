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

