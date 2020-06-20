import React from "react";
import type { FC } from "react";
import type { UseNormal } from "~/presenter/components/ecosystem/Me/hooks/type";
import style from "./style.module.css";

type Props = ReturnType<UseNormal>;

export const Normal: FC<Props> = (props) => (
  <div data-testid="Normal" className={style.container}>
    <div>
      <p>
        <span className={style.label}>名前</span>
        <span>{props.domain.me.name}</span>
      </p>
      <p>
        <span className={style.label}>住所</span>
        <span>{props.domain.me.address}</span>
      </p>
    </div>
    <div>
      <button className={style.button} onClick={props.operations.reRender}>
        再取得
      </button>
    </div>
  </div>
);
