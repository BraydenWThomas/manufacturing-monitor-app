import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: #f0f2f5;
    color: #333;
  }

  h1, h2, h3 {
    color: #333;
    margin-bottom: 20px;
  }

  .dashboard {
    padding: 40px;
    max-width: 1200px;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

export default GlobalStyle;
