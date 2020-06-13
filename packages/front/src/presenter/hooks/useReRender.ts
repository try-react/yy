import { useState } from "react";
import { ReadonlyDeep } from "type-fest";

export type ReRender = ReadonlyDeep<() => void>;

type UseReRender = () => {
  reRender: ReRender;
};

export const useReRender: UseReRender = () => {
  const [toggle, setToggle] = useState(false);
  return { reRender: () => setToggle(!toggle) };
};
