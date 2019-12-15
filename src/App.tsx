import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Api } from "./Api";
import useFetch from "./useFetch";

type data = {
  elements: object[];
  phases: string[];
  categories: string[];
};

const App: React.FC = () => {
  const [elements, phases, categories, loading]: data[] = useFetch(Api);

  return (
    <Wrapper>
      <ul>
        {loading ? <h1>loading...</h1> : <h1>HELLO API</h1>}
        {loading ? (
          <h1>loading...</h1>
        ) : (
          Object.values(phases).map((phase: any, i: number) => (
            <li key={phase[i]}>{phase}</li>
          ))
        )}
      </ul>
      <img src="./images/logo.svg" alt="logo" />
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  background-color: gray;
`;
