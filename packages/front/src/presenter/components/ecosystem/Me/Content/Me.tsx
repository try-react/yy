import React, { FC, Suspense } from "react";
import { selector } from "~/presenter/components/ecosystem/Me/util";
import { useReRender } from "~/presenter/hooks/useReRender";
import { interactor } from "~/useCase/me/interactor";
import { repository } from "~/gateway/repository/me";
import { Placeholder } from "./Placeholder";
import style from "./style.module.css";

export const Me: FC = () => {
  const useCase = {
    ...interactor({ repository }),
    ...useReRender(),
  };
  const Content = selector({ useCase });

  return (
    <div className={style.container}>
      <h2 className={style.title}>Profile</h2>
      <Suspense fallback={<Placeholder />}>
        <Content />
      </Suspense>
    </div>
  );
};
