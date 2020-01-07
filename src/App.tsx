import React from "react";
import { GlobalProvider } from "./GlobalState";
import Table from "./components/layouts/Table";

const App: React.FC = () => (
  <GlobalProvider>
    <Table />
  </GlobalProvider>
);

export default App;
