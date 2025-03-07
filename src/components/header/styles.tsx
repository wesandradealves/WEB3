import styled from 'styled-components';
import { List, ListItem } from '../navigation/styles';

export const Container = styled.header`
    ${List} {
        ${ListItem} {
            color: white;
        }
    }

    .logo {
        position: relative;
        z-index: 1001;
    }

    .hamburger {
        &-wrapper {
            z-index: 1001;
            position: relative;
        }
        &-inner, &-inner::before, &-inner::after {
            border-radius: 0;
            height: 2px;
        }
        &-inner, &-inner::before, 
        &-inner::after,
        &.is-active .hamburger-inner, 
        &.is-active .hamburger-inner::before, 
        &.is-active .hamburger-inner::after {
            background-color: ${props => props.theme._colors.primary.bdm1};
        } 
    }

    .navigation {
        &.--shortcuts {
            .list-item {
                font-weight: 500;
            }
        }
    }

    .container {
        padding-top: 24px;
        padding-bottom: 24px;
        z-index: initial;
    }
`;
