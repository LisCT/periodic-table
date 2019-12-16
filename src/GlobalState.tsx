import React, { createContext, useState, useEffect } from "react";
import useFetch from "./useFetch";
import { Api } from "./Api";

export const InitialState = {
  items: [],
  phases: [],
  categories: [],
  isFetching: true
};

type data = {
  items: object[];
  phases: string[];
  categories: string[];
  isFetching: boolean;
};

export const GlobalContext = createContext<data>(InitialState);

export const GlobalProvider: React.FC = ({ children }) => {
  const [items, setItems] = useState();
  const [phases, setPhases] = useState();
  const [categories, setCategories] = useState();
  const [isFetching, setIsFetching] = useState(true);
  const [elements, isLoading] = useFetch(Api);

  const fetching = async () => {
    try {
      const data = await elements;
      const phases = await data.phases;
      const items = await data.elements;
      const categories = await data.categories;

      setItems(items);
      setPhases(phases);
      setCategories(categories);

      setIsFetching(false);
    } catch (error) {
      console.log(`error procesing data: ${error}`);
    }
  };

  useEffect(() => {
    fetching();
  }, [isLoading]);

  return (
    <GlobalContext.Provider
      value={{
        items,
        phases,
        categories,
        isFetching
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
