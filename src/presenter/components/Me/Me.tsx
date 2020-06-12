import type { FC } from "react";
import React, { Suspense } from "react";
import { Placeholder } from "./Placeholder";

type Props = {
  Component: FC;
};
export const Me: FC<Props> = ({ Component }) => (
  <>
    <h2>Me</h2>
    <Suspense fallback={<Placeholder />}>
      <Component />
    </Suspense>
  </>
);
