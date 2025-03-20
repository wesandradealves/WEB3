import styled from 'styled-components';
import { pxToRem } from '@/utils';

export const Text = styled.p`
`;


export const Container = styled.div`
    ${Text} {
        font-size: ${pxToRem(14)}
    }
`;

export const Title = styled.h3`
    font-size: ${pxToRem(24)};
     span {
        color: ${props => props.theme._colors.primary.bdm3};
    }
`;