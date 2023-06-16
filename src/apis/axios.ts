import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://rolls.entrydsm.hs.kr/',
  timeout: 10000,
});
