import * as React from "react";
import { fetcher } from "./utils";

export interface TwitterAvatarResponse {
  url: string;
  html?: string;
}

export interface ErrorResponse {
  err: boolean;
  message: string;
}

const useTwitterAvatar = (username: string) => {
  const [
    twitterAvatar,
    setTwitterAvatar,
  ] = React.useState<TwitterAvatarResponse | null>(null);
  const [error, setError] = React.useState<ErrorResponse | null>(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    fetcher(`https://twitter-avatar-public-api.now.sh/${username}`)
      .then((data) => {
        setTwitterAvatar({ ...data });
      })
      .catch((err) => setError({ err: true, message: err.message }))
      .finally(() => setLoading(false));
  }, [username]);

  return { twitterAvatar, error, loading };
};

export default useTwitterAvatar;
