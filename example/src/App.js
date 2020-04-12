import React from "react";

import { useFormatMoney } from "react-use-pkg";

const App = () => {
  const [value, setFormat] = useFormatMoney();
  const input = React.useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
    setFormat(input.current.value, "de", "EUR");
  };

  return (
    <div>
      <h1>useFormatMoney hook</h1>
      <form onSubmit={onSubmit}>
        <input ref={input} type="text" name="amount" />
        <button type="submit">Set Format Money</button>
      </form>
      <h3>{value}</h3>
    </div>
  );
};
export default App;
