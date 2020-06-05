import React, { Suspense } from "react";
import type { FC } from "react";

type Props = {
  Component: FC;
};
export const Me: FC<Props> = ({ Component }) => (
  <Suspense fallback="取得中">
    <Component />
  </Suspense>
);
