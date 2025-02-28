import styled from 'styled-components';

export const Container = styled.header`
    .container {
        padding-top: 24px;
        padding-bottom: 24px;
        .navigation {
            &.--shortcuts {
                .list-item {
                    font-weight: 500;
                }
            }
        }
        .hamburger {
            &-inner, &-inner::before, &-inner::after {
                border-radius: 0;
                height: 2px;
                background-color: ${props => props.theme._colors.primary.bdm1};
            }
        }
        
    }
`;
