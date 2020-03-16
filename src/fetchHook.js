import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = url => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const result = await axios.get(url);
        setResponse(result.data || result);
        setIsLoading(false);
      } catch (err) {
        setError(err);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url]);
  return [response, error, isLoading];
};

export default useFetch;
