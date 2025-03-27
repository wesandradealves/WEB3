import styled, { css } from 'styled-components';
import { pxToRem } from '@/utils';

export interface Typo {
    backgroundimage?: string;
}

export const Container = styled.section<Typo>`
    color: white;
    .button {
        // font-size: ${pxToRem(16)};
        // @media screen and (min-width: ${props => props.theme._breakpoints.xxl}) {
        //     font-size: ${pxToRem(20)};
        // }
    }
    ${({ backgroundimage }) => backgroundimage && css`
        background: url(${backgroundimage}) center center / cover no-repeat transparent;
    `}  
`;

export const Placeholder = styled.img`

`;


export const Title = styled.h2`
    color: inherit;
    b, strong {
        font-weight: 900;
        color: ${props => props.theme._colors.primary.bdm3};
    }
`;

export const Text = styled.p`
    color: inherit;
    span {
        color: ${props => props.theme._colors.primary.bdm3};
    }
`;
