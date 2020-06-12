import { workFlow } from "~/domain/me";
import type { Interactor } from "./type/Interactor";

export const interactor: Interactor = ({ repository, id, reRender }) => ({
  reRender,
  fetch: workFlow.getLatestInformationAboutMe({
    repository,
    payload: { id },
  }),
});
