import * as React from "react";
import { fetcher } from "./utils";

const useFetchWithCORS = () => {
  const [data, setData] = React.useState("");

  const setURI = React.useCallback((url: string) => {
    try {
      const newURI = `https://cors-anywhere.herokuapp.com/${url}`;

      fetcher(newURI, { mode: "cors" }).then((data) => {
        setData(data);
      });
    } catch (e) {
      console.log(e);
    }
  }, []);

  return { data, setURI };
};

export default useFetchWithCORS;
