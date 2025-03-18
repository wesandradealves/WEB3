import { pxToRem } from '@/utils';
import styled from 'styled-components';

export const SocialWrapper = styled.div`
    .socialNetworks {
        color: ${props => props.theme._colors.primary.bdm3};
        font-size: ${pxToRem(24)};
    }
`;