import { ExternalInterfaceExceptionData } from "~/shared/typeGuard/Exception";
import { GatewayData } from "~/shared/typeGuard/Data";
import { ReadonlyDeep } from "type-fest";

export type Me = ReadonlyDeep<{
  id: string;
  /**
   * meの名前
   */
  name: string;
  /**
   * 住所
   */
  address: string;
  /**
   * 取得日時
   */
  getDateTime: string;
}>;

export type Repository = ReadonlyDeep<{
  fetchMe: () => Promise<GatewayData<Me> | ExternalInterfaceExceptionData>;
}>;

export type WorkFlow = ReadonlyDeep<{
  getLatestInformationAboutMe: (p: {
    repository: Repository;
  }) => () => ReturnType<Repository["fetchMe"]>;
}>;

/**
 * `Repository`の実行結果の正常系
 */
export type InitData = Me;
