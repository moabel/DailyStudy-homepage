import { useEffect } from "react";
import { useState } from "react";

export const useLocalStorage = (key, defaultValue) => {
  const isLocallySaved = JSON.parse(window.localStorage.getItem(key));
  const [localState, setLocalState] = useState(isLocallySaved ?? defaultValue);
  useEffect(
    () => window.localStorage.setItem(key, JSON.stringify(localState)),
    [localState]
  );
  return [localState, setLocalState];
};
