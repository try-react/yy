import type { ReRender } from "~/presenter/hooks/useReRender";
import type { Repository } from "~/domain/me/type";

/**
 * pages/ でもらう値
 */
export type InputPort = { repository: Repository } & ReRender;
