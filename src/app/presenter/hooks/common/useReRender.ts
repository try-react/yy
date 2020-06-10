import { useState } from "react";

export type UseReRender = () => {
  reRender: () => void;
};

export const useReRender: UseReRender = () => {
  const [toggle, setToggle] = useState(false);
  return { reRender: () => setToggle(!toggle) };
};
