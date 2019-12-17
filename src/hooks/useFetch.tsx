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

  const fetchingData = async () => {
    try {
      //console.log("1️⃣ - Start to fetch data from Api 🚚...");
      const response = await fetch(Api);
      const data = await response.json();

      //console.log("2️⃣ - Fetching data completed  ✅.");
      setData(data);
      setIsFetching(false);
    } catch (error) {
      console.log(`error fetching data: ${error}`);
    }
  };

  useEffect(() => {
    fetchingData();
  }, [isFetching]);

  return [data, isFetching];
};

export default useFetch;
