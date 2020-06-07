import { findPath } from "~/externalInterface/api/http/client/util";
import { httpClient } from "~/externalInterface/api/http/client";
import { ExternalInterfaceData } from "~/shared/typeGuard/read/Data";
import { ExternalInterfaceDataException } from "~/shared/typeGuard/read/Exception";

const path = findPath("me");

/**
 * オリジナルのレスポンス
 * 外部依存なので変更不可能
 */
type OResponse = {
  id_x_: string;
  name_x_: string;
  address_x_: string;
};

/**
 * こちら(front/)の世界で扱いやすいようにする
 * 例えば、スネークケースから、キャメルケースに変更
 * ここでは、Repositoryの事は、意識しない
 */
type Me = {
  id: string;
  name: string;
  address: string;
};

const orm = (r: OResponse): Me => ({
  id: r.id_x_,
  name: r.name_x_,
  address: r.address_x_,
});

type FetchMe = (p: {
  id: number;
}) => Promise<ExternalInterfaceData<Me> | ExternalInterfaceDataException>;
export const fetchMe: FetchMe = (_) =>
  httpClient
    .get<OResponse>(path)
    .then((r) =>
      r instanceof ExternalInterfaceData
        ? ExternalInterfaceData.of(orm(r.value))
        : r
    )
    .catch<never>((e) => e);
