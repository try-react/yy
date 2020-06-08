import { DomainDataException } from "~/shared/typeGuard/Exception/DomainDataException";
import {
  GatewayDataException,
  ExternalInterfaceDataException,
} from "~/shared/typeGuard/Exception";
import { DomainData, GatewayData } from "~/shared/typeGuard/Data";
import { ReadModel as ReadModel_ } from "~/shared/typeGuard/Model";

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

type ReadModel = ReadModel_<Me, { id: number }>;

export type Repository = {
  fetchMe: (
    p: ReadModel["payload"]
  ) => Promise<
    | GatewayData<ReadModel["object"]>
    | GatewayDataException
    | ExternalInterfaceDataException
  >;
};

export type WorkFlow = {
  getLatestInformationAboutMe: (p: {
    repository: Repository;
    payload: ReadModel["payload"];
  }) => () => Promise<
    | DomainData<ReadModel["object"]>
    | DomainDataException
    | GatewayDataException
    | ExternalInterfaceDataException
  >;
};
