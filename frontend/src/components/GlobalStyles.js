import { createGlobalStyle } from "styled-components";
import { typeScale } from "./token";

const GlobalStyle = createGlobalStyle`
 * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    html {
        width: 100%;
        height: 100%;
    }
    body {
        height: 100%;
        font-size: ${typeScale.body}
    }
    div#root {
        height: 100%;
    }
    h1 {
        font-weight: 700;
        font-size: ${typeScale.header1};
        line-height: ${typeScale.header1};
        }
    h2 {
        font-weight: 700;
        font-size: ${typeScale.header2};
        line-height: ${typeScale.header2};
    }
    h3 {
        font-weight: 700;
        font-size: ${typeScale.header3};
        line-height: ${typeScale.header3};
    }
    h4 {
        font-weight: 700;
        font-size: ${typeScale.header4};
        line-height: ${typeScale.header4};
    }
    h5 {
        font-weight: 700;
        font-size: ${typeScale.header5};
        line-height: ${typeScale.header5};
    }
    h6 {
        font-weight: 700;
        font-size: ${typeScale.header6};
        line-height: ${typeScale.header6};
    }
`;

export default GlobalStyle;
