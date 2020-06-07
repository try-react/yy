import type { Repository } from "~/domain/me";
import { fetchMe } from "~/externalInterface/api/http/me";
import {
  ExternalInterfaceData,
  GatewayData,
} from "~/shared/typeGuard/read/Data";
import {
  ExternalInterfaceDataException,
  GatewayDataException,
} from "~/shared/typeGuard/read/Exception";

/**
 * Domain.Repositoryが欲しい型に変更
 * 特に意味はないが、`flg`を付与
 */
export const repository: Repository = {
  fetchMe: (p) =>
    fetchMe(p)
      .then((res) => {
        if (res instanceof ExternalInterfaceData) {
          return GatewayData.of({ ...res.value, flg: true });
        }
        if (res instanceof ExternalInterfaceDataException) {
          return res;
        }
        return Promise.reject(
          GatewayDataException.of({
            message: "GatewayDataExceptionが発生しました。",
            error: res,
          })
        );
      })
      .catch<never>((e) => e),
};
