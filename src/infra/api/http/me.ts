import { fetcher, findPath } from "~/infra/api/http/client";
import { InfraData } from "~/shared/CQRS/read/InfraData";
import { InfraException } from "~/shared/CQRS/read/InfraException";

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

const toMe = (r: OResponse): Me => ({
  id: r.id_x_,
  name: r.name_x_,
  address: r.address_x_,
});

type FetchMe = (p: { id: number }) => Promise<InfraData<Me> | InfraException>;
export const fetchMe: FetchMe = (_) =>
  fetcher<OResponse>(path)
    .then((r) => (r instanceof InfraData ? InfraData.of(toMe(r.value)) : r))
    .catch<never>((e) => e);
