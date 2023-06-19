type LocalStorageKeys = 'isVerified';

export const setLocalStorage = (key: LocalStorageKeys, value: string) => {
  localStorage.setItem(key, value);
};

export const getLocalStorage = (key: LocalStorageKeys) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  localStorage.getItem(key);

export const removeLocalStorageItem = (key: LocalStorageKeys) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  localStorage.removeItem(key);
