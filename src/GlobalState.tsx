import React, { createContext, useState, useEffect } from "react";
import useData from "./hooks/useData";
import { Api } from "./Api";

const InitialState = {
  items: [],
  phases: [],
  categories: [],
  isLoading: true
};

type data = {
  items: object[];
  phases: string[];
  categories: string[];
  isLoading: boolean;
};

export const GlobalContext = createContext<data>(InitialState);

export const GlobalProvider: React.FC = ({ children }) => {
  const [items, phases, categories, isLoading] = useData(Api);

  return (
    <GlobalContext.Provider
      value={{
        items,
        phases,
        categories,
        isLoading
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
