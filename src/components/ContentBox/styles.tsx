import styled from 'styled-components';
import { pxToRem } from '@/utils';

export const Container = styled.div`

`; 

export const Title = styled.h2`
    color: inherit;
    font-size: ${pxToRem(32)};
    @media screen and (min-width: ${props => props.theme._breakpoints.xxl}) {
        font-size: ${pxToRem(64)};
    }
    span {
        color: ${props => props.theme._colors.primary.bdm3};
    }
`; 

export const Text = styled.div`
    color: inherit;
    font-size: ${pxToRem(16)};
    @media screen and (min-width: ${props => props.theme._breakpoints.xxl}) {
        font-size: ${pxToRem(24)};
    }
    span {
        color: ${props => props.theme._colors.primary.bdm3};
    }
`; 