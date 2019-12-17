import { useEffect, useState } from "react";
import axios from "axios";

/**
 * Feching Data
 * * The generic data is getting from an API.
 * @param Api this method is expecting an URL.
 */

const useFetch = (Api: string) => {
  const [data, setData] = useState();
  const [isFetching, setIsFetching] = useState(true);

  const fetchingData = async () => {
    try {
      //console.log("1️⃣ - Start to fetch data from Api 🚚...");
      const response = await axios.get(Api);
      const data = await response.data;

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
