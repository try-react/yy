import React, { Suspense } from "react";
import type { FC } from "react";
import { Placeholder } from "./Placeholder";

type Props = {
  Component: FC;
};
export const Me: FC<Props> = ({ Component }) => (
  <Suspense fallback={<Placeholder />}>
    <Component />
  </Suspense>
);
