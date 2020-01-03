import React from "react";
import { GlobalProvider } from "./GlobalState";
import GlobalStyle from "./GlobalStyle";

const App: React.FC = () => {
  return (
    <GlobalProvider>
      <GlobalStyle />
      <h1>Testing fonts</h1>
      <img src="./images/logo.svg" alt="logo" />
    </GlobalProvider>
  );
};

export default App;
