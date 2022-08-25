import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  html,
  body {
    letter-spacing: -0.5px;
    font-family: 'GmarketSans', sans-serif;
    overflow: auto;
    font-size: ${(props) => props.theme.fontSize.text}
  }

  a {
    text-decoration: none;
  }

  button {
    padding: 0;
    border: 0;
    background: none;
    cursor: pointer;
    vertical-align: top;
  }

  figure,
  figcaption {
    margin: 0;
    padding: 0;
  }

  img {
    vertical-align: top;
  }

  ul,
  ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
