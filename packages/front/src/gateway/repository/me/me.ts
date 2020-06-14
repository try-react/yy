import type { Repository } from "~/domain/me";
import { dao } from "~/gateway/dao/me";
import { ExternalInterfaceData, GatewayData } from "~/shared/typeGuard/Data";

/**
 * 外の世界から取得した値を、こちらの世界のDomain.Repositoryが欲しい型に変更
 */
export const repository: Repository = {
  fetchMe: () =>
    dao
      .fetchMe()
      .then((res) =>
        res instanceof ExternalInterfaceData
          ? GatewayData.of({ ...res.value, flg: true })
          : res
      ),
};
