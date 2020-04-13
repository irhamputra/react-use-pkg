import { useCallback, useState } from "react";

const useToggle = (initialState: boolean = false) => {
  const [on, setToggle] = useState(initialState);

  const reset = useCallback(() => setToggle(initialState), []);
  const toggle = useCallback(() => setToggle((prevState) => !prevState), []);

  return { on, set: setToggle, reset, toggle };
};

export default useToggle;
