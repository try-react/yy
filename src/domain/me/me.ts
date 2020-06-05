import type { WorkFlow } from "./type";
import { InitData } from "~/shared/data/read/InitData";
import { InfraException } from "~/shared/exception/InfraException";
import { InfraData } from "~/shared/data/read/InfraData";

export const workFlow: WorkFlow = {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  fetchInitValue: ({ repository }) => (p) =>
    repository
      .fetchMe(p)
      .then((res) => {
        if (res instanceof InfraData) {
          return InitData.of(res.value);
        }
        if (res instanceof InfraException) {
          return res;
        }
        return Promise.reject();
      })
      .catch<never>((e) => e),
};
