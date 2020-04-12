import { useState, useCallback } from "react";
import { fetcher } from "./utils";

const useFetchWithCORS = () => {
  const [data, setData] = useState("");

  const setURI = useCallback((url: string, opt?) => {
    try {
      const newURI = `https://cors-anywhere.herokuapp.com/${url}`;
      fetcher(newURI, opt).then((data) => setData(data));
    } catch (e) {
      console.log(e);
    }
  }, []);

  return [data, setURI];
};

export default useFetchWithCORS;
