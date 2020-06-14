import type { WorkFlow } from "./type";

export const workFlow: WorkFlow = {
  getLatestInformationAboutMe: ({ repository }) => () =>
    repository.fetchMe().then((res) => res),
};
