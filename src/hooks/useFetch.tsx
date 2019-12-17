import { useEffect, useState } from "react";

/**
 * Feching Data
 * * The data is getting from an API via fetch().
 * @param {string} Api - URL to be used for the useFetch(Api).
 * @returns {array} - [data, isFetching]
 */

const useFetch = (Api: string): Array<any> => {
  const [data, setData] = useState();
  const [isFetching, setIsFetching] = useState(true);

  const fetchingData = () => {
    fetch(Api)
      .then(response => response.json())
      .then(res => {
        setData(res);
        setIsFetching(false);
      })
      .catch(error => console.log(`error fetching data: ${error}`));
  };

  useEffect(() => {
    fetchingData();
  }, [isFetching]);

  return [data, isFetching];
};

export default useFetch;
