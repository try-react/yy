import React from "react";
import type { FC } from "react";

type Props = {
  name: string;
};
export const Content: FC<Props> = (props) => (
  <>
    名前:<span data-testid="authorName">{props.name}</span>
  </>
);
