import type { Repository, InitData } from "~/domain/me/type";

/**
 * `controller`が外部からもらう値
 * SPAだと、URLパラメタや`pages`からもらう値
 *
 * このtypeは、domainの型を使ったり、domainに定義したりはしません
 * 理由は、外部依存なためです
 */
export type InputData = {
  id: number;
  reRender: () => void;
};

/**
 * `presenter`に渡す値
 * `hooks`や`Component`の初期値
 */
export type Props = {
  service: Service;
  initData: InitData;
  reRender: InputData["reRender"];
};

/**
 * `controller`で引数をもらい`presenter`用の値を生成します
 */
export type Interactor = (p: {
  repository: Repository;
  id: InputData["id"];
}) => Service;

type Service = () => {
  fetch: () => ReturnType<Repository["fetchMe"]>;
};
