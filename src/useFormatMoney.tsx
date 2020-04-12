import * as React from "react";

export const useFormatMoney = () => {
  const [value, setValue] = React.useState('')

  const setFormat = React.useCallback((amount: number, locales: string, currency: string) => {
    const formatMoney = new Intl.NumberFormat(locales, {
      style: "currency",
      currency
    }).format(amount)

    setValue(formatMoney)

  }, [])

  return [value, setFormat]
}
