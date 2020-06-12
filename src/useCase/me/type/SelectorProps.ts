import type { Repository } from "~/domain/me/type";

/**
 * `pages/`からもらう値
 */
export type SelectorProps = {
  fetch: () => ReturnType<Repository["fetchMe"]>;
  reRender: () => void;
};
