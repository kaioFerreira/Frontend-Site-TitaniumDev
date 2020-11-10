import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        -webkit-font-smoothing: antialiased;
        background: #EEF0F8;
    }

    body, input, button {
        font-family: Poppins, Helvetica, "sans-serif";
        font-size: 16px;
    }
    a {
        text-decoration: none;
    }
    h1, h2, h3, h4, h5, strong {
        font-weight: 500;
    }

    button {
        cursor: pointer;
    }
`;
