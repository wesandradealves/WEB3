import styled, {createGlobalStyle} from "styled-components";
import { pxToRem } from "@/utils";
export const GlobalStyle = createGlobalStyle `
    *,
    *:before,
    *:after {
        box-sizing: border-box;
    }

    html,
    body,
    div,
    span,
    object,
    iframe,
    figure,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    pre,
    a,
    code,
    em,
    img,
    small,
    strike,
    strong,
    sub,
    sup,
    tt,
    b,
    u,
    i,
    ol,
    ul,
    li,
    fieldset,
    form,
    label,
    table,
    caption,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td,
    main,
    canvas,
    embed,
    footer,
    header,
    nav,
    section,
    video {
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        text-size-adjust: none;
        text-decoration: none;
    }

    html,
    body {
        line-height: 1.4;
        font-family: 'Montserrat', sans-serif;
        font-optical-sizing: auto;
        font-style: normal;
        overflow-x: hidden;
        min-width: ${props => props.theme._breakpoints.sm};
        font-size: ${pxToRem(16)};
        background-color: black;
        #__next {
            overflow-x: inherit;
        }
    }

    ol,
    ul {
        list-style: none;
    }

    blockquote,
    q {
        quotes: none;
    }

    blockquote:before,
    blockquote:after,
    q:before,
    q:after {
        content: "";
        content: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
        * {
            background-color: transparent;
            vertical-align: middle;
        }
    }

    input {
        -webkit-appearance: none;
        appearance: none; 
        border-radius: 0;
        font-family: inherit;
    }    

    .pace {
        &-progress {
            background-color: ${props => props.theme._colors.primary.bdm0} !important;
        }
    } 
`;

export const App = styled.div `
`;