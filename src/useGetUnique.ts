import { useState, useCallback } from "react";

const useGetUnique = <T>() => {
  const [uniqueArray, setUniqueArray] = useState<Array<T>>([]);

  const setArray = useCallback((value: Array<T>) => {
    setUniqueArray([...new Set(value)]);
  }, []);

  return { uniqueArray, setArray };
};

export default useGetUnique;
