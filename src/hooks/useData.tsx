import { useEffect, useState } from "react";
import useFetch from "./useFetch";

/**
 * Using The Data
 * * The data is getting from the useFetch hook.
 * * It's organized in 3 objects:
 * ? 1.Elements: that holds all the items with the necessary values for the UI.
 * ? 2.Phases: holds the phases that are going to be used for filtering.
 * ? 3.Categories: holds the categories that are going to be used for filtering.
 * @param Api this method is expecting an URL to be used for the useFetch(Api).
 */

const useData = (Api: string) => {
  const [data, isFetching] = useFetch(Api);
  const [elements, setElements] = useState();
  const [phases, setPhases] = useState();
  const [categories, setCategories] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const procesing = async () => {
    try {
      // response form the API
      const response = await data.elements;

      // Objects where the info is pushed before updating the state.
      const items: object[] = [];
      const phases: string[] = [];
      const categories: string[] = [];

      // looping through the objects to organize the data
      response.map((e: any) => {
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
        items.push({
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

      //Filling the state with the structured data.
      setElements(items);
      setPhases(phases);
      setCategories(categories);

      //console.log("3️⃣- Procesing data complete ✅.");
      setIsLoading(false);
    } catch (error) {
      console.log(`error procesing the data: ${error}`);
    }
  };

  useEffect(() => {
    !isFetching && procesing();
  }, [isFetching]);

  return [elements, phases, categories, isLoading];
};

export default useData;
