import { useEffect, useState } from "react";

export const useLocalStorage = <T,>(
  key: string,
  defaultValue: T
): [T, (value: T) => void] => {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    const item = localStorage.getItem(key);

    if (!item) {
      localStorage.setItem(key, JSON.stringify(defaultValue));
    }

    setValue(item ? JSON.parse(item) : defaultValue);

    function handler(event: StorageEvent) {
      if (event.key !== key) {
        return;
      }

      setValue(JSON.parse(localStorage.getItem(key) ?? ""));
    }

    window.addEventListener("storage", handler);

    return () => {
      window.removeEventListener("storage", handler);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setValue_ = (value: T) => {
    try {
      setValue(value);

      localStorage.setItem(key, JSON.stringify(value));

      if (typeof window !== "undefined") {
        window.dispatchEvent(new StorageEvent("storage", { key }));
      }
    } catch (error) {
      console.error(error);
    }
  };

  return [value, setValue_];
};
