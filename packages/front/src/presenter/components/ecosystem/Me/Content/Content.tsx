import React from "react";
import type { FC } from "react";
import type { UseMe } from "~/presenter/components/ecosystem/Me/hooks/type";
import style from "./style.module.css";

type Props = ReturnType<UseMe>;

export const Content: FC<Props> = (props) => (
  <>
    <span data-testid="Content" />
    <p>
      <span className={style.label}>名前</span>
      <span>{props.domain.me.name}</span>
    </p>
    <p>
      <span className={style.label}>住所</span>
      <span>{props.domain.me.address}</span>
    </p>
    <div>
      <button
        className={style.reFetch}
        onClick={props.operations.reFetch}
        disabled={props.selectors.isAsync}
      >
        Re-Fetch
      </button>
      <span>{props.app.status}</span>
    </div>
    <div>
      <button className={style.reRender} onClick={props.operations.reRender}>
        Re-Render
      </button>
    </div>
  </>
);
