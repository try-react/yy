import type { WorkFlow } from "./type";
import { DomainData } from "~/shared/CQRS/read/DomainData";
import { InfraException } from "~/shared/CQRS/read/InfraException";
import { DomainDataException } from "~/shared/CQRS/read/DomainDataException";
import { InfraData } from "~/shared/CQRS/read/InfraData";

type InFn = ReturnType<WorkFlow["query"]["fetchInitValue"]>;
type P = Parameters<InFn>[0];
type R = ReturnType<InFn>;

export const workFlow: WorkFlow = {
  write: null,
  query: {
    fetchInitValue: ({ repository }) => (p: P): R =>
      repository
        .fetchMe(p)
        .then((res) => {
          if (res instanceof InfraData) {
            return DomainData.of(res.value);
          }
          if (res instanceof InfraException) {
            return res;
          }
          return DomainDataException.of({
            message: "DomainDataExceptionで例外が発生しました。",
            error: res,
          });
        })
        .catch<never>((e) => e),
  },
};
