import { SelectorProps } from "./SelectorProps";
import type { Repository } from "~/domain/me/type";
import { ReRender } from "~/presenter/hooks/useReRender";

/**
 * `pages/`で引数をもらい`presenter/`に渡す値を生成します
 */
export type Interactor = (p: {
  repository: Repository;
  reRender: ReRender;
}) => SelectorProps;
