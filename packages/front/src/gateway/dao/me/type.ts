import { ExternalInterfaceExceptionData } from "~/shared/typeGuard/Exception";
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

/**
 * スネークケースから、キャメルケースに変更します
 */
type Me = {
  id: string;
  name: string;
  address: string;
};

type FetchMeR = ExternalInterfaceData<Me> | ExternalInterfaceExceptionData;

/**
 * ここでは、Repositoryの事は、意識しない
 */
export type ORM = (r: OResponse) => Me;

export type FetchMe = () => Promise<FetchMeR>;
