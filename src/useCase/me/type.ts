import type { Repository, InitData } from "~/domain/me/type";

/**
 * `presenter`に渡す値
 * `hooks`や`Component`の初期値
 */
export type PresenterProps = {
  service: () => {
    fetch: () => ReturnType<Repository["fetchMe"]>;
  };
  initData: InitData;
  reRender: () => void;
};

/**
 * `controller`が外部からもらう値
 * SPAだと、URLパラメタや`pages`からもらう値
 *
 * このtypeは、domainの型を使ったり、domainに定義したりはしません
 * 理由は、外部依存なためです
 */
export type ControllerProps = {
  id: number;
  reRender: () => void;
};

/**
 * `controller`で引数をもらい`presenter`用の値を生成します
 */
export type Interactor = (p: {
  repository: Repository;
  id: ControllerProps["id"];
}) => PresenterProps["service"];
