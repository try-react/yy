import React from "react";
import type { FC } from "react";
import type { UseMe } from "~/presenter/components/Me/hooks/type";

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
    <hr />
    <div>
      <button
        onClick={props.operations.reFetch}
        disabled={props.selectors.isAsync}
      >
        Re-Fetch
      </button>
      <span>{props.app.status}</span>
    </div>
    <div>
      <button onClick={props.operations.reRender}>Re-Render</button>
    </div>
  </>
);
