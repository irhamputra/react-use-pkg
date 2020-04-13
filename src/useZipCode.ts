import { useCallback, useState } from "react";
import { fetcher } from "./utils";

const useZipCode = () => {
  const [data, setData] = useState<Payload | null>(null);

  const setCodeCountry = useCallback((countryCode: string, code?: string) => {
    try {
      const baseUrl = "http://api.zippopotam.us";

      fetcher(
        `https://cors-anywhere.herokuapp.com/${baseUrl}/${countryCode}${
          code && `/${code}`
        }`,
        {
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((data) => {
        setData(data);
      });
    } catch (e) {
      console.log(e);
    }
  }, []);

  return { data, setCodeCountry };
};

interface Place {
  placeName: string;
  longitude: string;
  postCode: string;
  latitude: string;
}

export interface Payload {
  countryAbbreviation: string;
  places: Place[];
  country: string;
  placeName: string;
  state: string;
  stateAbbreviation: string;
}

export default useZipCode;
