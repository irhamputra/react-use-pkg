import * as React from "react";

interface Options {
  defer?: boolean;
  async?: boolean;
}

const useLoadScript = (url: string, options: Options = {}) => {
  React.useEffect(() => {
    const script = document.createElement("script");

    script.src = url;
    script.async = options.async as boolean;
    script.defer = options.defer as boolean;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [url]);
};

export default useLoadScript;
