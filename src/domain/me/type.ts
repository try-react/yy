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

type Parameter = ReadonlyDeep<{ id: number }>;

export type Repository = ReadonlyDeep<{
  fetchMe: (
    p: Parameter
  ) => Promise<GatewayData<Me> | ExternalInterfaceDataException>;
}>;

export type WorkFlow = ReadonlyDeep<{
  getLatestInformationAboutMe: (p: {
    repository: Repository;
    payload: Parameter;
  }) => () => ReturnType<Repository["fetchMe"]>;
}>;

/**
 * `Repository`の実行結果の正常系
 */
export type InitData = Me;
