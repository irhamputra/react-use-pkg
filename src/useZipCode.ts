import { useCallback, useState } from "react";
import { fetcher } from "./utils";

const useZipCode = () => {
  const [zipCode, setState] = useState<Payload | null>(null);

  const setZipCode = useCallback((country: string, code?: number) => {
    try {
      const baseUrl = "http://api.zippopotam.us";

      fetcher(`${baseUrl}/${country}${code ? `/${code}` : null}`).then(
        (data) => {
          setState(data);
        }
      );
    } catch (e) {}
  }, []);

  return [zipCode, setZipCode];
};

interface Place {
  placeName: string;
  longitude: string;
  postCode: string;
  latitude: string;
}

interface Payload {
  countryAbbreviation: string;
  places: Place[];
  country: string;
  placeName: string;
  state: string;
  stateAbbreviation: string;
}

export default useZipCode;
