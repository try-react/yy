import { DomainDataException } from "~/shared/exception/DomainDataException";
import { InfraException } from "~/shared/exception/InfraException";
import { InitData } from "~/shared/data/read/InitData";
import { InfraData } from "~/shared/data/read/InfraData";

type ReadModel = {
  object: { name: string; address: string; id: string; flg: boolean };
  payload: { id: number };
};

export type Repository = {
  fetchMe: (
    p: ReadModel["payload"]
  ) => Promise<InfraData<ReadModel["object"]> | InfraException>;
};

type Resources = {
  repository: Repository;
};
export type WorkFlow = {
  write: null;
  query: {
    fetchInitValue: (
      p: Resources
    ) => (
      p: ReadModel["payload"]
    ) => Promise<
      InitData<ReadModel["object"]> | InfraException | DomainDataException
    >;
  };
};
