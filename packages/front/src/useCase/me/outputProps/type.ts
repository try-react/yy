import type { Repository } from "~/domain/me/type";
import type { ReRender } from "~/presenter/hooks/useReRender";

/**
 * `presenter/`に渡す値
 */
export type OutputProps = {
  fetch: () => ReturnType<Repository["fetchMe"]>;
} & ReRender;
