import { DomainDataException } from "~/shared/CQRS/read/DomainDataException";
import { InfraException } from "~/shared/CQRS/read/InfraException";
import { DomainData } from "~/shared/CQRS/read/DomainData";
import { InfraData } from "~/shared/CQRS/read/InfraData";
import { ReadModel } from "~/shared/CQRS/read/Model";

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
