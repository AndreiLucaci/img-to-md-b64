import { theme } from "@config/theme"
import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  body {
    background-color: ${theme.colors.background};
    height: 100vh;
  }

`

/*
  h1, h2,h3, h4, p {
    color: ${theme.colors.blue} !important;
  }
*/
