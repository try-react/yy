import type { FC } from "react";
import React, { Suspense } from "react";
import { Placeholder } from "../Content/Placeholder";
import style from "./style.module.css";

type Props = {
  Content: FC;
};
export const Container: FC<Props> = ({ Content }) => (
  <div className={style.container}>
    <h2 className={style.title}>Profile</h2>
    <Suspense fallback={<Placeholder />}>
      <Content />
    </Suspense>
  </div>
);
