import React from "react";
import type { FC } from "react";
import type { MapToExceptionContentProps } from "~/presenter/components/ecosystem/Me/util/type";

type Props = ReturnType<MapToExceptionContentProps>;

export const Exception: FC<Props> = (props) => (
  <div data-testid="Exception">
    <div>
      <p>
        <span>取得に失敗しました。({props.app.cnt.exceptionCnt}回目)</span>
      </p>
    </div>
    <button onClick={props.operations.reRender}>再取得</button>
  </div>
);
