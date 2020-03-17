import React from "react";
import { GlobalProvider } from "./GlobalState";
import PeriodicTable from "./components/layouts/PeriodicTable";

const App: React.FC = () => (
  <GlobalProvider>
    <PeriodicTable />
  </GlobalProvider>
);

export default App;
