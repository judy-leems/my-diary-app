import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

// root등 global style 작성
export default createGlobalStyle`
    ${reset}
    html,
    body {
      overflow: auto;
    }

    html,npm
    body {
      font-size: 17px;
      letter-spacing: -0.5px;
      font-family: 'Noto Sans CJK KR', sans-serif;
      color: ${(props) => props.theme.colors.font1};
    }

    button {
      padding: 0;
      border: 0;
      background: none;
      cursor: pointer;
      vertical-align: top;
    }

    a {
      text-decoration: none;
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
