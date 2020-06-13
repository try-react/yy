import type { FC } from "react";
import React, { Suspense } from "react";
import { Placeholder } from "../Placeholder";
import style from "./style.module.css";

type Props = {
  Component: FC;
};
export const Screen: FC<Props> = ({ Component }) => (
  <>
    <h2 className={style.title}>Me</h2>
    <Suspense fallback={<Placeholder />}>
      <Component />
    </Suspense>
  </>
);
