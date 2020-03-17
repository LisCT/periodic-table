import React, { useContext } from "react";
import styled from "styled-components";
import GlobalStyle from "../../GlobalStyle";
import Header from "./Header";
import Table from "./Table";
import Footer from "./Footer";
import { ThemeProvider } from "styled-components";
import { GlobalContext } from "../../GlobalState";

const PeriodicTable = ({ className }: { className: string }) => {
  const { theme } = useContext(GlobalContext);

  return (
    <div className={className}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Table />
        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default styled(PeriodicTable)`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
