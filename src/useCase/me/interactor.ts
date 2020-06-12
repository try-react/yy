import { workFlow } from "~/domain/me";
import type { Interactor } from "./type/Interactor";

export const interactor: Interactor = ({ repository, id }) => () => ({
  fetch: workFlow.getLatestInformationAboutMe({
    repository,
    payload: { id },
  }),
});
