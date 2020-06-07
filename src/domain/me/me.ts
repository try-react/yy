import type { WorkFlow } from "./type";
import {
  DomainDataException,
  InfraException,
} from "~/shared/typeGuard/read/Exception";
import { InfraData, DomainData } from "~/shared/typeGuard/read/Data";

type InFn = ReturnType<WorkFlow["fetchInitValue"]>;
type P = Parameters<InFn>[0];
type R = ReturnType<InFn>;

export const workFlow: WorkFlow = {
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
};
