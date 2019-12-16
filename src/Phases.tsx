import React, { useContext } from "react";
import { GlobalContext } from "./GlobalState";

const Phases = () => {
  const { phases, isFetching } = useContext(GlobalContext);

  return (
    <ul>
      {isFetching ? (
        <h1>loading...</h1>
      ) : (
        phases.map((phase: any, i: number) => <li key={phase[i]}>{phase}</li>)
      )}
    </ul>
  );
};

export default Phases;
