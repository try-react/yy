import React from "react";
import type { FC } from "react";
import { State as Props } from "~/useCase/useMe/type";

export const Content: FC<Props> = (props) => (
  <>
    <span data-testid="Content" />
    <ul>
      <li>
        名前:<span>{props.name}</span>
      </li>
      <li>
        住所:<span>{props.address}</span>
      </li>
    </ul>
  </>
);
