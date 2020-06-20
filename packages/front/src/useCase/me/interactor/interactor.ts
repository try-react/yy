import { workFlow } from "~/domain/me";
import type { Interactor } from "./type";

export const interactor: Interactor = ({ repository }) => ({
  fetch: workFlow.getLatestInformationAboutMe({
    repository,
  }),
});
