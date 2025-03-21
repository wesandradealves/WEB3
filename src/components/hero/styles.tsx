import styled, { css } from 'styled-components';
import { pxToRem } from '@/utils';

export interface Typo {
    backgroundimage?: string;
}

export const Container = styled.section<Typo>`
    color: white;
    .button {
        padding-top: ${pxToRem(8)};
        padding-bottom: ${pxToRem(8)};
        padding-left: ${pxToRem(55)};
        padding-right: ${pxToRem(55)};
        text-transform: uppercase;
        font-size: ${pxToRem(16)};
        @media screen and (min-width: ${props => props.theme._breakpoints.xxl}) {
            font-size: ${pxToRem(20)};
        }
    }
    ${({ backgroundimage }) => backgroundimage && css`
        background: url(${backgroundimage}) center center / cover no-repeat transparent;
    `}  
`;

export const Placeholder = styled.img`

`;


export const Title = styled.h2`
    color: inherit;
    font-size: ${pxToRem(32)};
    @media screen and (min-width: ${props => props.theme._breakpoints.xxl}) {
        font-size: ${pxToRem(64)};
    }
    line-height: 1.2;
    b, strong {
        font-weight: 900;
        color: ${props => props.theme._colors.primary.bdm3};
    }
`;

export const Text = styled.p`
    color: inherit;
    font-size: ${pxToRem(19)};
    @media screen and (min-width: ${props => props.theme._breakpoints.xxl}) {
        font-size: ${pxToRem(36)};
    }
    line-height: 1.4;
    span {
        color: ${props => props.theme._colors.primary.bdm3};
    }
`;
