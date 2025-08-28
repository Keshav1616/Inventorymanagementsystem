import { useState, useEffect } from "react";

export default function usePersistedState(initial) {
  const [state, setState] = useState(() => {
    try {
      const raw = localStorage.getItem("store_state");
      return raw ? JSON.parse(raw) : initial;
    } catch {
      return initial;
    }
  });

  useEffect(() => {
    localStorage.setItem("store_state", JSON.stringify(state));
  }, [state]);

  return [state, setState];
}
