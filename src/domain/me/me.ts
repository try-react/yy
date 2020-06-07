import type { WorkFlow } from "./type";
import {
  DomainDataException,
  GatewayDataException,
  ExternalInterfaceDataException,
} from "~/shared/typeGuard/read/Exception";
import { GatewayData, DomainData } from "~/shared/typeGuard/read/Data";

type InFn = ReturnType<WorkFlow["getLatestInformationAboutMe"]>;
type R = ReturnType<InFn>;

export const workFlow: WorkFlow = {
  getLatestInformationAboutMe: ({ repository, payload }) => (): R =>
    repository
      .fetchMe(payload)
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
