import React from "react";
import type { FC } from "react";
import type { MapToExceptionContentProps } from "~/presenter/components/ecosystem/Me/util/type";
import style from "./style.module.css";

type Props = ReturnType<MapToExceptionContentProps>;

export const Exception: FC<Props> = (props) => (
  <div data-testid="Exception">
    <div>
      <p>
        <span>取得に失敗しました。({props.app.cnt.exceptionCnt}回目)</span>
      </p>
    </div>
    <div>
      <button className={style.button} onClick={props.operations.reRender}>
        再取得
      </button>
    </div>
  </div>
);
