import { useEffect, useState } from "react";
import axios from "axios";

/**
 * Feching Data
 * * The data is getting from an API.
 * * It's organized in 3 objects:
 * ? 1.Elements: that holds all the items with the necessary values for the UI.
 * ? 2.Phases: holds the phases that are going to be used for filtering.
 * ? 3.Categories: holds the categories that are going to be used for filtering.
 */

const useFetch = (Api: string) => {
  const [elements, setElements] = useState();
  const [phases, setPhases] = useState();
  const [categories, setCategories] = useState();
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    async function procesingData() {
      try {
        // Data from the API call
        console.log("1️⃣ - Start to fetch data 🚚.....");

        const response = await axios.get(Api);
        const data = await response.data.elements;

        console.log("2️⃣ - Fetching data completed  📨📝.");

        // Objects where the info is pushed before updating the state.
        const elements: object[] = [];
        const phases: string[] = [];
        const categories: string[] = [];

        // looping through the objects to organize the data
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

        //Creating the obj to be used to fill the state.
        setElements(elements);
        setPhases(phases);
        setCategories(categories);

        // The procesing of the data is complete ✅
        setIsLoading(false);
        console.log("3️⃣- Procesing data complete ✅.");
      } catch (error) {
        console.log(`error procecing data: ${error}`);
      }
    }

    if (Api !== "") {
      procesingData();
    }
  }, [Api]);

  return [elements, phases, categories, loading];
};

export default useFetch;
