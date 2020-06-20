import { workFlow } from "~/domain/me";
import type { Interactor } from "./type";

export const interactor: Interactor = ({ repository, reRender, cnt }) => ({
  reRender,
  cnt,
  fetch: workFlow.getLatestInformationAboutMe({
    repository,
  }),
});
