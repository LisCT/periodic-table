import React from "react";
import styled from "styled-components";
import DataFetching from "./DataFetching";

const App: React.FC = () => (
  <Wrapper>
    <h1>Hello World</h1>
    <DataFetching />
    <img src="../images/logo.svg" className="App-logo" alt="logo" />
  </Wrapper>
);

export default App;

const Wrapper = styled.div`
  background-color: gray;
`;
