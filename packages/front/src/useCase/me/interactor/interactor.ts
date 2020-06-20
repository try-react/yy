import { workFlow } from "~/domain/me";
import type { Interactor } from "./type";

export const interactor: Interactor = ({
  repository,
  reRenderBySuccess,
  reRenderByException,
  cnt,
}) => ({
  reRenderBySuccess,
  reRenderByException,
  cnt,
  fetch: workFlow.getLatestInformationAboutMe({
    repository,
  }),
});
