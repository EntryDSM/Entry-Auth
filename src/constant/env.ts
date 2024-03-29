export const BASE_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://auth.entrydsm.hs.kr';

export const COOKIE_DOMAIN =
  process.env.NODE_ENV === 'development' ? 'localhost' : 'entrydsm.hs.kr';
