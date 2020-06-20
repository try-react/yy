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

// eslint-disable-next-line @typescript-eslint/ban-types
type OnRejected = () => { default: FC<{}> };
export const onRejected: OnRejected = () => ({ default: ThrowError });
