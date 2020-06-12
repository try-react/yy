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
