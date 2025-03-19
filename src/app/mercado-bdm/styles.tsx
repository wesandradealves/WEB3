import { pxToRem } from '@/utils';
import styled from 'styled-components';

export const Heading = styled.h3`
    font-size: ${pxToRem(59)};
    small {
        font-size: ${pxToRem(18)};
    }
`;

export const Text = styled.p`
    
`;

export const Item = styled.li`
    
`;

export const Numbers = styled.ul`
    ${Item} {
        ${Text} {
            font-size: ${pxToRem(14)};
        }
        ${Heading} {
            span {
                color: inherit
            }
        }
    }
`;

export const BigTitle = styled.h4`
    font-size: ${pxToRem(60)};
    @media screen and (min-width: ${props => props.theme._breakpoints.lg}) {
        @media screen and (min-width: ${props => props.theme._breakpoints.xxl}) {
            font-size: ${pxToRem(121)};
        }
        font-size: ${pxToRem(90)};
    }
    span {
        color: ${props => props.theme._colors.primary.bdm3};
    }
`;