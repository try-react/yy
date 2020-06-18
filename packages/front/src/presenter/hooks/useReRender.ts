import { useState } from "react";

export type ReRender = ReturnType<UseReRender>;

type UseReRender = () => {
  reRender: () => void;
  cnt: number;
};

export const useReRender: UseReRender = () => {
  const [cnt, setCnt] = useState(1);
  return { reRender: () => setCnt(cnt + 1), cnt };
};
