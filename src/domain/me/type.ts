import { DomainDataException } from "~/shared/typeGuard/read/Exception/DomainDataException";
import {
  GatewayDataException,
  ExternalInterfaceDataException,
} from "~/shared/typeGuard/read/Exception";
import { DomainData, GatewayData } from "~/shared/typeGuard/read/Data";
import { ReadModel as ReadModel_ } from "~/shared/typeGuard/read/Model";

type Me = { name: string; address: string; id: string; flg: boolean };
type ReadModel = ReadModel_<Me, { id: number }>;

// --------------------------------------------
/**
 * Meの情報がある`Repository`のKey
 */
type RepositoryKey = "fetchMe";

type RepositoryP = {
  fetchMe: ReadModel["payload"];
};

type RepositoryR = {
  fetchMe:
    | GatewayData<ReadModel["object"]>
    | GatewayDataException
    | ExternalInterfaceDataException;
};

export type Repository = Record<
  RepositoryKey,
  (p: RepositoryP[RepositoryKey]) => Promise<RepositoryR[RepositoryKey]>
>;

// --------------------------------------------
/**
 * Meの情報を取得
 */
type WorkFlowKey = "getLatestInformationAboutMe";

type WorkFlowP = {
  getLatestInformationAboutMe: {
    repository: Repository;
    payload: ReadModel["payload"];
  };
};

type WorkFlowR = {
  getLatestInformationAboutMe:
    | DomainData<ReadModel["object"]>
    | DomainDataException
    | GatewayDataException
    | ExternalInterfaceDataException;
};

export type WorkFlow = Record<
  WorkFlowKey,
  (p: WorkFlowP[WorkFlowKey]) => () => Promise<WorkFlowR[WorkFlowKey]>
>;
