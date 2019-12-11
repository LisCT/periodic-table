import React from "react";
import styled from "styled-components";
import logo from "./logo.svg";

const App: React.FC = () => (
  <Wrapper>
    <h1>Hello World</h1>
    <img src={logo} className="App-logo" alt="logo" />
  </Wrapper>
);

export default App;

const Wrapper = styled.div`
  background-color: red;
`;
