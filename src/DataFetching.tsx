import React, { useEffect, useState } from "react";
import axios from "axios";

/**
 * Fetting Data
 * * This function is used to get the data from the API.
 * * The data is reorganized in 3 objects:
 * ? 1.Elements: that holds all the items with the necessary values for the UI.
 * ? 2.Phases: holds the phases that are going to be used for filtering.
 * ? 3.Categories: holds the categories that are going to be used for filtering.
 */

type res = {
  elements: object[];
  phases: string[];
  categories: object[];
};

const DataFetching = () => {
  const [elements, setElements] = useState({});

  useEffect(() => {
    // Objects where the info is pushed before updating the state.

    const elements: object[] = [];
    const phases: string[] = [];
    const categories: object[] = [];

    axios
      .get(
        "https://raw.githubusercontent.com/Bowserinator/Periodic-Table-JSON/master/PeriodicTableJSON.json"
      )
      .then(response => {
        const data = response.data.elements;

        data.map((e: any) => {
          // Destructuring the necessaries fields

          const {
            name,
            number,
            symbol,
            atomic_mass,
            phase,
            summary,
            period,
            category,
            discovered_by,
            appearance,
            source
          } = e;

          // Organizing the data in phases & categories if the item exist don't repeat.

          !phases.includes(phase) ? phases.push(phase) : false;
          !categories.includes(category) ? categories.push(category) : false;

          // Elements: We're only going to add the parameters necesaries for the UI.

          elements.push({
            number,
            name,
            symbol,
            atomic_mass,
            summary,
            period,
            category,
            discovered_by,
            appearance,
            source
          });
        });

        phases.push("unknown");

        // Creating the obj to be used to fill the state.

        const res: res = { elements, phases, categories };

        // Updating the state

        setElements(res);
      })
      .catch(err => console.log(err));
  });

  return <div></div>;
};

export default DataFetching;
