import React from "react";
import type { FC } from "react";
import { State as Props } from "~/useCase/useMe/type";

export const Content: FC<Props> = (props) => (
  <>
    名前:<span data-testid="authorName">{props.name}</span>
  </>
);
