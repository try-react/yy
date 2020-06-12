import type { Repository } from "~/domain/me/type";
import type { ControllerProps } from "./input/type";
import type { PresenterProps } from "./props/type";

/**
 * `controller`で引数をもらい`presenter`用の値を生成します
 */
export type Interactor = (p: {
  repository: Repository;
  id: ControllerProps["id"];
}) => PresenterProps["service"];
