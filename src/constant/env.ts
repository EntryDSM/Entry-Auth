export const BASE_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://auth.entrydsm.hs.kr';

export const MAIN_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3002'
    : 'https://www.entrydsm.hs.kr';

export const COOKIE_DOMAIN =
  process.env.NODE_ENV === 'development' ? 'localhost' : 'entrydsm.hs.kr';
