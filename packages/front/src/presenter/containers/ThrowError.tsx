import React from "react";

const ThrowError = (): JSX.Element => {
  React.useEffect(() => {
    throwError();
  }, []);
  return <></>;
};

const throwError = (): never => {
  throw new Error();
};

type OnRejected = () => { default: () => JSX.Element };
export const onRejected: OnRejected = () => ({ default: ThrowError });
