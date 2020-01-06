import React from "react";
import { GlobalProvider } from "./GlobalState";
import GlobalStyle from "./GlobalStyle";
import Header from "./components/layouts/Header";

const App: React.FC = () => {
  return (
    <GlobalProvider>
      <GlobalStyle />
      <Header />
    </GlobalProvider>
  );
};

export default App;
