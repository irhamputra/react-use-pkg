export const fetcher = (url: RequestInfo, opt?: RequestInit) =>
  fetch(url, opt).then((res) => res.json());
