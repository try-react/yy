import React from "react";

const ThrowError = () => {
  React.useEffect(() => {
    throwError();
  }, []);
  return <></>;
};

const throwError = (): never => {
  throw new Error();
};

type OnRejected = () => Promise<{ default: () => JSX.Element }>;
export const onRejected: OnRejected = () =>
  Promise.resolve({ default: ThrowError });
