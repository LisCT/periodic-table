import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Api } from "./Api";
import useFetch from "./useFetch";

const App: React.FC = () => {
  const [elements, phases, categories, procesing] = useFetch(Api);

  return (
    <Wrapper>
      {procesing ? <h1>loading...</h1> : <h1>DATA FETCHING</h1>}
      <h1>Hello</h1>
      <img src="./images/logo.svg" alt="logo" />
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  background-color: gray;
`;
