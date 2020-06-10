import type { WorkFlow } from "~/domain/me/type";

type GetLatestInformationAboutMe = WorkFlow["getLatestInformationAboutMe"];

export type Interactor = (
  p: Parameters<GetLatestInformationAboutMe>[0]
) => () => {
  fetch: ReturnType<GetLatestInformationAboutMe>;
};
