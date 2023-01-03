import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    // Font sizes
    --font-size-regular: 1rem;
    --font-size-small: 0.875rem;
    --font-size-smaller: 0.75rem;

    // Font weight
    --font-weight-regular: 400;
    --font-weight-bold: 700;

    // Colors
    --color-gray-100: #F2F2F2;
    --color-gray-200: #D9D9D9;
    --color-gray-300: #808080;
    --color-gray-400: #333333;
    --color-gray-500: #262626;
    --color-gray-600: #1A1A1A;
    --color-gray-700: #0D0D0D;

    --color-purple: #8284FA;
    --color-purple-dark: #5E60CE;

    --color-blue: #4EA8DE;
    --color-blue-dark: #1E6F9F;

    --color-danger: #E25858;
  }

  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

  body {
    min-height: 100vh;

    font-family: 'Inter', sans-serif;
    font-size: var(--font-size-regular);
    line-height: 140%;
  }

  input {
    font-size: var(--font-size-regular);

    outline: none;
    box-shadow: none;
  }

  button {
    font-size: var(--font-size-small);

    cursor: pointer;

    outline: none;
    box-shadow: none;
  }
`;
