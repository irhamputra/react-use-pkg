import * as React from "react";

const useFormatMoney = () => {
  const [value, setValue] = React.useState<string | number>("");

  const setFormat = React.useCallback(
    (amount: number, locales: string, currency: string) => {
      const formatMoney = new Intl.NumberFormat(locales, {
        style: "currency",
        currency,
      }).format(amount);

      setValue(formatMoney);
    },
    []
  );

  return { value, setFormat };
};

export default useFormatMoney;
