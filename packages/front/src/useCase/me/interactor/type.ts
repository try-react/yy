import type { OutputProps } from "../outputProps/type";
import type { InputPort } from "../inputPort/type";

/**
 * `pages/`で、`InputPort`をもらい
 * `presenter/`に`OutputProps`渡す値を生成します
 */
export type Interactor = (p: InputPort) => OutputProps;
