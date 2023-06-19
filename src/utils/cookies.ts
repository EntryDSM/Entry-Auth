import { Cookies } from 'react-cookie';
import { CookieSetOptions } from 'universal-cookie';

type CookieItem = 'access_token' | 'refresh_token';

const cookies = new Cookies();

export const setCookies = (
  key: CookieItem | CookieItem[],
  value: string | string[],
  options?: CookieSetOptions,
) => {
  if (Array.isArray(key)) {
    key.forEach((_, i) => cookies.set(key[i], value[i], options));
  } else cookies.set(key, value, options);
};

export const getCookies = <T>(key: CookieItem | CookieItem[]) => {
  let item: T | T[];

  if (Array.isArray(key)) item = key.map((k) => cookies.get<T>(k));
  else item = cookies.get<T>(key);

  return item;
};

export const setTokens = (accessToken: string, refreshToken: string) =>
  setCookies(['access_token', 'refresh_token'], [accessToken, refreshToken]);
