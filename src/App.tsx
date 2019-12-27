import React from "react";
import styled from "styled-components";
import { GlobalProvider } from "./GlobalState";
import Phases from "./Phases";
const Wrapper = styled.div`
  background-color: gray;
`;

const App: React.FC = () => {
  return (
    <GlobalProvider>
      <Wrapper>
        <Phases />
        <img src="./images/logo.svg" alt="logo" />
      </Wrapper>
    </GlobalProvider>
  );
};

export default App;
