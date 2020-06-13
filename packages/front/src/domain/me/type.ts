import { ExternalInterfaceDataException } from "~/shared/typeGuard/Exception";
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
  flg: boolean;
}>;

export type Repository = ReadonlyDeep<{
  fetchMe: (p: {
    id: number;
  }) => Promise<GatewayData<Me> | ExternalInterfaceDataException>;
}>;

export type WorkFlow = ReadonlyDeep<{
  getLatestInformationAboutMe: (p: {
    repository: Repository;
    payload: Parameters<Repository["fetchMe"]>[0];
  }) => () => ReturnType<Repository["fetchMe"]>;
}>;

/**
 * `Repository`の実行結果の正常系
 */
export type InitData = Me;
