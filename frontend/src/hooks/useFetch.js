import { useEffect, useState } from "react";
import axios from "axios";

export const useFetch = (url) => {
  //
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        //
        console.log(error);
        setError(error);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
};
