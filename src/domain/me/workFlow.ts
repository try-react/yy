import type { WorkFlow } from "./type";

export const workFlow: WorkFlow = {
  getLatestInformationAboutMe: ({ repository, payload }) => () =>
    repository.fetchMe(payload).then((res) => res),
};
