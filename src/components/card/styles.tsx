import styled from 'styled-components';
import { pxToRem } from '@/utils/pxToRem'; 
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const Container = styled.article`
padding: ${pxToRem(16)};
`;

export const Title = styled.h3`
font-size: ${pxToRem(20)};
font-weight: 600;
margin-bottom: ${pxToRem(8)};
color: #fff;
`;

export const Text = styled.p`
font-size: ${pxToRem(14)};
line-height: 1.6;
color: #ccc;
`;

export const StyledImage = styled(LazyLoadImage)`
width: 32px;
height: auto;
@media (min-width: 1024px) {
 width: 48px;
}
`;