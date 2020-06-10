import { ExternalInterfaceDataException } from "~/shared/typeGuard/Exception";
import { ExternalInterfaceData } from "~/shared/typeGuard/Data";

/**
 * オリジナルのレスポンス
 * 外部依存なので変更不可能
 */
export type OResponse = {
  id_x_: string;
  name_x_: string;
  address_x_: string;
};

type Me = {
  id: string;
  name: string;
  address: string;
};

type FetchMeR = ExternalInterfaceData<Me> | ExternalInterfaceDataException;

/**
 * こちらの世界で扱いやすいようにする
 * 例えば、スネークケースから、キャメルケースに変更
 * ここでは、Repositoryの事は、意識しない
 */
export type ORM = (r: OResponse) => Me;

export type FetchMe = (p: { id: number }) => Promise<FetchMeR>;
