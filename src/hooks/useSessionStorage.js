import { useState } from 'react';

export const useSessionStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = sessionStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  const setValue = (value) => {
    setStoredValue(value);
    sessionStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
};
