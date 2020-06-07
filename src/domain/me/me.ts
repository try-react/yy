import type { WorkFlow } from "./type";
import {
  DomainDataException,
  GatewayDataException,
  ExternalInterfaceDataException,
} from "~/shared/typeGuard/read/Exception";
import { GatewayData, DomainData } from "~/shared/typeGuard/read/Data";

type InFn = ReturnType<WorkFlow["fetchInitValue"]>;
type P = Parameters<InFn>[0];
type R = ReturnType<InFn>;

export const workFlow: WorkFlow = {
  fetchInitValue: ({ repository }) => (p: P): R =>
    repository
      .fetchMe(p)
      .then((res) => {
        if (res instanceof GatewayData) {
          return DomainData.of(res.value);
        }
        if (res instanceof GatewayDataException) {
          return res;
        }
        if (res instanceof ExternalInterfaceDataException) {
          return res;
        }
        return DomainDataException.of({
          message: "DomainDataExceptionで例外が発生しました。",
          error: res,
        });
      })
      .catch<never>((e) => e),
};
