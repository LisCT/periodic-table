import { createGlobalStyle } from "styled-components";
import { normalize } from "polished";
import { fonts } from "./utils/Fonts";

const GlobalStyle = createGlobalStyle`
  ${normalize()}

  @import url('https://fonts.googleapis.com/css?family=Poppins:400,500|Roboto:400,500,700&display=swap');

  html{
    box-sizing: border-box;
  }

  *, *:before, *:after{
    box-sizing: inherit
  }

  body{
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: antialiased;
    ${fonts.primary};
  }

  a{
    text-decoration: none;
    color: inherit;
  }

`;

export default GlobalStyle;
