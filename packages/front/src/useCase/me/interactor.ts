import { workFlow } from "~/domain/me";
import type { Interactor } from "./type/Interactor";

export const interactor: Interactor = ({ repository, reRender, cnt }) => ({
  reRender,
  cnt,
  fetch: workFlow.getLatestInformationAboutMe({
    repository,
  }),
});
