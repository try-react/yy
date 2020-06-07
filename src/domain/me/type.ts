import { DomainDataException } from "~/shared/typeGuard/read/Exception/DomainDataException";
import { InfraException } from "~/shared/typeGuard/read/Exception/InfraException";
import { DomainData } from "~/shared/typeGuard/read/Data/DomainData";
import { InfraData } from "~/shared/typeGuard/read/Data/InfraData";
import { ReadModel } from "~/shared/typeGuard/read/Model";

type ReadModel_ = ReadModel<
  { name: string; address: string; id: string; flg: boolean },
  { id: number }
>;

export type Repository = {
  fetchMe: (
    p: ReadModel_["payload"]
  ) => Promise<InfraData<ReadModel_["object"]> | InfraException>;
};

export type WorkFlow = {
  fetchInitValue: (p: {
    repository: Repository;
  }) => (
    p: ReadModel_["payload"]
  ) => Promise<
    DomainData<ReadModel_["object"]> | InfraException | DomainDataException
  >;
};
