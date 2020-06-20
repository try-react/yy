import type { Repository } from "~/domain/me/type";

/**
 * `pages/`で、`InputPort`をもらい
 * `presenter/`に`OutputProps`渡す値を生成します
 */
export type Interactor = (p: {
  repository: Repository;
}) => {
  fetch: () => ReturnType<Repository["fetchMe"]>;
};
