import styled from 'styled-components';
import { pxToRem } from '@/utils';
export const Select = styled.div`
    box-shadow: 0px 4px 4px 0px #00000040;
    background-color: ${props => props.theme._colors.primary.bdm7};
    select {
        background: transparent;
        border: 0;
        outline: initial;
        color: #FBFBFBE5;
        font-weight: bold;
        font-size: ${pxToRem(32)};
        option {
            color: initial;
            font-size: ${pxToRem(16)};
        }
    }
    .arrow {
        font-size: ${pxToRem(48)};
        color: ${props => props.theme._colors.primary.bdm1};
    }
`;