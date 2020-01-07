import React, { useContext } from "react";
import GlobalStyle from "../../GlobalStyle";
import Header from "./Header";
import Footer from "./Footer";
import { ThemeProvider } from "styled-components";
import { GlobalContext } from "../../GlobalState";

const Table = () => {
  const { theme } = useContext(GlobalContext);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default Table;
