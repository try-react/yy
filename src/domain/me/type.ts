import { DomainDataException } from "~/shared/typeGuard/read/Exception/DomainDataException";
import { InfraException } from "~/shared/typeGuard/read/Exception/InfraException";
import { DomainData } from "~/shared/typeGuard/read/Data/DomainData";
import { InfraData } from "~/shared/typeGuard/read/Data/InfraData";
import { ReadModel as ReadModel_ } from "~/shared/typeGuard/read/Model";

export type ReadModel = ReadModel_<
  { name: string; address: string; id: string; flg: boolean },
  { id: number }
>;

export type Repository = {
  fetchMe: (
    p: ReadModel["payload"]
  ) => Promise<InfraData<ReadModel["object"]> | InfraException>;
};

export type WorkFlow = {
  fetchInitValue: (p: {
    repository: Repository;
  }) => (
    p: ReadModel["payload"]
  ) => Promise<
    DomainData<ReadModel["object"]> | InfraException | DomainDataException
  >;
};
