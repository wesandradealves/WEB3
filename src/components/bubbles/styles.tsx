import { pxToRem } from '@/utils';
import styled from 'styled-components';



export const Title = styled.h3`

`;

export const Text = styled.p`

`;

export const Blob = styled.div`

`;

export const ImgWrapper = styled.div`
    background: rgba(70, 54, 0, 1);
    &::before {
        position: absolute;
        content: counter(list-counter);
        background-color: rgba(255, 255, 255, 0.20);
        box-shadow: 16.372px -16.372px 16.372px 0px rgba(149, 149, 149, 0.10) inset, -16.372px 16.372px 16.372px 0px rgba(255, 255, 255, 0.10) inset;
        backdrop-filter: blur(16.372203826904297px);
        width: 60px;
        height: 60px;
        margin: -5px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 999px;
        overflow: hidden;
        font-weight: bold;
        font-size: ${pxToRem(32)};
    }
    transition: 500ms ease-in-out all;
`;

export const Item = styled.li`
    counter-increment: list-counter;
    &:first-of-type {
        ${ImgWrapper} {
            &::before {
                left: 0;
                bottom: 0;
            }
        }
        & ~ :nth-child(even) {
            ${ImgWrapper} {
                &::before {
                    right: 0;
                    bottom: 0;
                }
            }
        }
        & ~ :nth-child(odd) {
            ${ImgWrapper} {
                &::before {
                    top: 0;
                    left: 0;
                    @media (min-width: ${props => props.theme._breakpoints.lg}) {
                        right: 0;
                        left: initial;
                    }
                }
            }
        }
    }
`;

export const Container = styled.ul`
    counter-reset: list-counter;

    ${Item} {
        ${Title} {
            font-size: ${pxToRem(18)};
        }
        ${Text} {
            font-size: ${pxToRem(14)};
        }
    }
`;
