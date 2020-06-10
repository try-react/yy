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

type Payload = { id: number };
export type Repository = {
  fetchMe: (
    p: Payload
  ) => Promise<GatewayData<Me> | ExternalInterfaceDataException>;
};

export type WorkFlow = {
  getLatestInformationAboutMe: (p: {
    repository: Repository;
    payload: Payload;
  }) => () => ReturnType<Repository["fetchMe"]>;
};
