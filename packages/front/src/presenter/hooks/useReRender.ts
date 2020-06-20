import { useState } from "react";

export type ReRender = ReturnType<UseReRender>;

type Cnt = { exceptionCnt: number; successCnt: number };
type UseReRender = () => {
  reRenderBySuccess: () => void;
  reRenderByException: () => void;
  cnt: Cnt;
};

export const useReRender: UseReRender = () => {
  const [cnt, setCnt] = useState<Cnt>({ exceptionCnt: 1, successCnt: 1 });
  return {
    cnt,
    reRenderBySuccess: () => {
      setCnt({
        successCnt: cnt.successCnt + 1,
        exceptionCnt: cnt.exceptionCnt,
      });
    },
    reRenderByException: () => {
      setCnt({
        successCnt: cnt.successCnt,
        exceptionCnt: cnt.exceptionCnt + 1,
      });
    },
  };
};
