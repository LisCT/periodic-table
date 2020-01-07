import React, { useState, createContext } from "react";
import useData from "./hooks/useData";
import { Api } from "./Api";
import { light } from "./utils/Colors";

const InitialState = {
  items: [],
  phases: [],
  categories: [],
  isLoading: true,
  theme: light,
  setTheme: () => {}
};

type data = {
  items: object[];
  phases: string[];
  categories: string[];
  isLoading: boolean;
  theme: color;
  setTheme: React.Dispatch<React.SetStateAction<color>>;
};

type color = {
  colors: {
    palette: string;
    main: string;
    footer: string;
    dark: string;
    logo: string;
    middle: string;
    bottom: string;
    text: string;
    lines: string;
    cta: string;
    name: string;
  };
};

export const GlobalContext = createContext<data>(InitialState);

export const GlobalProvider: React.FC = ({ children }) => {
  const [items, phases, categories, isLoading] = useData(Api);
  const [theme, setTheme] = useState(light);

  return (
    <GlobalContext.Provider
      value={{
        items,
        phases,
        categories,
        isLoading,
        theme,
        setTheme
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
