import React, { useContext } from "react";
import { GlobalContext } from "./GlobalState";

const Phases = () => {
  const { phases, isLoading } = useContext(GlobalContext);

  return (
    <ul>
      {isLoading ? (
        <li>loading...</li>
      ) : (
        phases.map((phase: any, i: number) => <li key={phase[i]}>{phase}</li>)
      )}
    </ul>
  );
};

export default Phases;
