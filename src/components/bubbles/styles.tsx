import { pxToRem } from '@/utils';
import styled from 'styled-components';

export const Item = styled.li`

`;

export const Title = styled.h3`

`;

export const Text = styled.p`

`;

export const Blob = styled.div`

`;

export const ImgWrapper = styled.div`
    background: rgba(70, 54, 0, 1)
    // background: linear-gradient(264.72deg, rgba(70, 54, 0, 0.34) 4.22%, rgba(255, 199, 0, 0.34) 22.85%, rgba(179, 107, 0, 0.34) 34.42%, rgba(255, 199, 0, 0.34) 47.27%, rgba(255, 166, 0, 0.34) 68.47%, rgba(223, 169, 24, 0.34) 87.75%, rgba(253, 221, 2, 0.34) 96.75%, rgba(255, 199, 0, 0.34) 105.1%, rgba(235, 106, 20, 0.34) 116.67%, rgba(255, 199, 0, 0.34) 127.59%);
`;

export const Container = styled.ul`
    ${Item} {
        ${Title} {
            font-size: ${pxToRem(18)};
        }
        ${Text} {
            font-size: ${pxToRem(14)};
        }
    }
`;
