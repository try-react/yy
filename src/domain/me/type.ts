import { DomainDataException } from "~/shared/typeGuard/read/Exception/DomainDataException";
import {
  GatewayDataException,
  ExternalInterfaceDataException,
} from "~/shared/typeGuard/read/Exception";
import { DomainData, GatewayData } from "~/shared/typeGuard/read/Data";
import { ReadModel as ReadModel_ } from "~/shared/typeGuard/read/Model";

type ReadModel = ReadModel_<
  { name: string; address: string; id: string; flg: boolean },
  { id: number }
>;

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
  fetchInitValue: (p: {
    repository: Repository;
  }) => (
    p: ReadModel["payload"]
  ) => Promise<
    | DomainData<ReadModel["object"]>
    | GatewayDataException
    | DomainDataException
    | ExternalInterfaceDataException
  >;
};
