import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    color: #333;
  }

  h1, h2, h3 {
    color: #444;
  }

  .dashboard {
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
  }
`;

export default GlobalStyle;