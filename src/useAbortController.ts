import * as React from "react";

const useAbortController = () => {
  const ref = React.useRef<AbortController | null>(null);

  React.useEffect(() => () => ref.current?.abort(), []);

  return React.useCallback(() => {
    ref.current = new AbortController();
    return ref.current.signal;
  }, []);
};

export default useAbortController;
