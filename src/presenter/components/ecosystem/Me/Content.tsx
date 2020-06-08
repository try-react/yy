import React from "react";
import type { FC } from "react";
import { UseMe } from "~/useCase/useMe/type";

type Props = ReturnType<UseMe>;

export const Content: FC<Props> = (props) => (
  <>
    <span data-testid="Content" />
    <ul>
      <li>
        名前:<span>{props.domain.me.name}</span>
      </li>
      <li>
        住所:<span>{props.domain.me.address}</span>
      </li>
    </ul>
    <button
      onClick={props.operations.reFetch}
      disabled={props.selectors.isAsync}
    >
      Re
    </button>
    <span>{props.app.status}</span>
  </>
);
