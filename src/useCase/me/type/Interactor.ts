import { ControllerProps } from "./ControllerProps";
import { PresenterProps } from "./PresenterProps";
import type { Repository } from "~/domain/me/type";

/**
 * `controller`で引数をもらい`presenter`用の値を生成します
 */
export type Interactor = (p: {
  repository: Repository;
  id: ControllerProps["id"];
}) => PresenterProps["service"];
