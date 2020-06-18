import type { Repository } from "~/domain/me/type";
import type { ReRender } from "~/presenter/hooks/useReRender";

/**
 * `pages/`からもらう値
 */
export type SelectorProps = {
  fetch: () => ReturnType<Repository["fetchMe"]>;
} & ReRender;
