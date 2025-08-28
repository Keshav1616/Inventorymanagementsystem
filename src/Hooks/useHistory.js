import { useState } from "react";

const clamp = (n, min, max) => Math.min(Math.max(n, min), max);

export default function useHistory(initial) {
  const [stack, setStack] = useState([initial]);
  const [index, setIndex] = useState(0);

  const set = (val) => {
    const newStack = stack.slice(0, index + 1);
    newStack.push(val);
    setStack(newStack);
    setIndex(newStack.length - 1);
  };

  const undo = () => setIndex((i) => clamp(i - 1, 0, stack.length - 1));
  const redo = () => setIndex((i) => clamp(i + 1, 0, stack.length - 1));

  return { state: stack[index], set, undo, redo, canUndo: index > 0, canRedo: index < stack.length - 1 };
}
