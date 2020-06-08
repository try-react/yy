import type { Repository } from "~/domain/me";
import { fetchMe } from "~/externalInterface/api/http/me";
import { ExternalInterfaceData, GatewayData } from "~/shared/typeGuard/Data";
import {
  ExternalInterfaceDataException,
  GatewayDataException,
} from "~/shared/typeGuard/Exception";

/**
 * 外の世界から取得した値を、こちらの世界のDomain.Repositoryが欲しい型に変更
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
