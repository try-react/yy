import React from "react";
import type { FC } from "react";
import type { UseExceptionContent } from "~/presenter/components/ecosystem/Me/hooks/type";
import style from "./style.module.css";

type Props = ReturnType<UseExceptionContent>;

export const ExceptionContent: FC<Props> = (props) => (
  <div data-testid="ExceptionContent">
    <div>
      <p>
        <span>取得に失敗しました。({props.app.cnt}回目)</span>
      </p>
    </div>
    <div>
      <button className={style.button} onClick={props.operations.reRender}>
        再取得
      </button>
    </div>
  </div>
);
