import { useState, useCallback } from "react";

const useFormatMoney = () => {
  const [value, setValue] = useState<string | number>("");

  const setFormat = useCallback(
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
