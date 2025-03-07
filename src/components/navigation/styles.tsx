import styled from 'styled-components';
import { pxToRem } from "@/utils";

export const Submenu = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    min-width: 100%;
`;

export const ListItem = styled.li`
    font-weight: 700;
    position: relative;
    font-size: ${pxToRem(16)};
    line-height: ${pxToRem(24)};
    &.expanded,
    &:hover {
        color: ${props => props.theme._colors.primary.bdm1} !important;
    }
    &.expanded {
        [class*="fa-"] {
            transform: rotate(180deg);
        }
    }
    [class*="fa-"] {
        font-size: ${pxToRem(14)};
        color: ${props => props.theme._colors.primary.bdm1};
    }
`;

export const List = styled.ul`
 
`;

export const Container = styled.nav`
    ${Submenu} {
        ${List} {
            background-color: ${props => props.theme._colors.primary.bdm1};
            padding: ${pxToRem(20)};
            border-radius: ${pxToRem(10)};
            ${ListItem} {
                color: black;
                font-weight: 600;
                &:hover {
                    color: white !important;
                }
                a {
                    color: inherit
                }
            }
        }
    }
    &.--mobile {
        left: -100%;
        background: rgba(0,0,0,.9);
        transition: left 0.3s ease-in-out;
        &.block {
            left: 0;
        }
        &.hidden {
            left: -100%;
        }
        .container {
            padding-top: 140px;
        }
        ${Submenu} {
            position: relative;
            ${List} {
                background-color: initial;
                padding: 0;
                border-radius: initial;
                ${ListItem} {
                    color: white;
                }
            }
        }
    }
`;




      