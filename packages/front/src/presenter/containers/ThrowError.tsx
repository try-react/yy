import React from "react";
import type { FC } from "react";

const ThrowError: FC = () => {
  React.useEffect(() => {
    throwError();
  }, []);
  return null;
};

const throwError = (): never => {
  throw new Error();
};

type OnRejected = () => { default: FC };
export const onRejected: OnRejected = () => ({ default: ThrowError });
