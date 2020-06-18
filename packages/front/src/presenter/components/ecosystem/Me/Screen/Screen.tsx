import type { FC } from "react";
import React, { Suspense } from "react";
import { ContentPlaceholder } from "../ContentPlaceholder";
import style from "./style.module.css";

type Props = {
  Component: FC;
};
export const Screen: FC<Props> = ({ Component }) => (
  <div className={style.container}>
    <h2 className={style.title}>Profile</h2>
    <Suspense fallback={<ContentPlaceholder />}>
      <Component />
    </Suspense>
  </div>
);
