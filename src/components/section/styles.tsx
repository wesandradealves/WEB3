import { pxToRem } from '@/utils';
import styled, { css } from 'styled-components';

export interface Typo {
    background?: string;
    backgroundcolor?: string;
}

export const Container = styled.section<Typo>`
    color: white;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    ${({ background }) => background && css`
        background-image: url(${background});
    `} 
    ${({ backgroundcolor }) => backgroundcolor && css`
        background-color: ${backgroundcolor};
    `}  
`;

export const Title = styled.h2`
    color: inherit;
    font-size: ${pxToRem(24)};
    @media screen and (min-width: ${props => props.theme._breakpoints.xxl}) {
        font-size: ${pxToRem(48)};
    }
    span {
        color: ${props => props.theme._colors.primary.bdm3};
    }
`;

export const Subtitle = styled.p`
    color: inherit;
    font-size: ${pxToRem(18)};
    @media screen and (min-width: ${props => props.theme._breakpoints.xxl}) {
        font-size: ${pxToRem(32)};
    }
    span {
        color: ${props => props.theme._colors.primary.bdm3};
    }
`;

export const SectionHeader = styled.div`
 
`;