import React from "react";
import type { FC } from "react";

export const Err: FC = () => (
  <>
    <span data-testid="Err" />
    <span>想定外のエラーが発生しました。</span>
  </>
);
