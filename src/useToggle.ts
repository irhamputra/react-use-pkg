import * as React from "react";

const useToggle = (initialState: boolean = false) => {
  const [on, setToggle] = React.useState(initialState);

  const reset = React.useCallback(() => setToggle(initialState), []);
  const toggle = React.useCallback(() => setToggle((prevState) => !prevState), []);

  return { on, set: setToggle, reset, toggle };
};

export default useToggle;
