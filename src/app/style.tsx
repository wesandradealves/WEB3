import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle `
    html {
        .pace {
            &-progress {
                background-color: ${props => props.theme._colors.primary.bdm0} !important;
            }
        }        
    }
`;

export const App = styled.div `
`;