import { useEffect, useCallback } from "react";

const useWillUnmount = () => {
  const willUnmount = useCallback((fn: () => void) => {
    useEffect(() => () => fn && fn(), []);
  }, []);

  return { willUnmount };
};

export default useWillUnmount;
