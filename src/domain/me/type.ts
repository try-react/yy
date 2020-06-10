import { ExternalInterfaceDataException } from "~/shared/typeGuard/Exception";
import { GatewayData } from "~/shared/typeGuard/Data";

export type Me = {
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
};

export type Repository = {
  fetchMe: (p: {
    id: number;
  }) => Promise<GatewayData<Me> | ExternalInterfaceDataException>;
};

export type WorkFlow = {
  getLatestInformationAboutMe: (p: {
    repository: Repository;
    payload: { id: number };
  }) => () => ReturnType<Repository["fetchMe"]>;
};
