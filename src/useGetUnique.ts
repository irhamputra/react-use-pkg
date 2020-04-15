import * as React from "react";

const useGetUnique = <T>() => {
  const [uniqueArray, setUniqueArray] = React.useState<Array<T>>([]);

  const setArray = React.useCallback((value: Array<T>) => {
    setUniqueArray([...new Set(value)]);
  }, []);

  return { uniqueArray, setArray };
};

export default useGetUnique;
