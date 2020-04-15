import * as React from "react";

const useWillUnmount = () => {
  const willUnmount = React.useCallback((fn: () => void) => {
    React.useEffect(() => () => fn && fn(), []);
  }, []);

  return { willUnmount };
};

export default useWillUnmount;
