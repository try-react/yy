import { InfraException } from "~/shared/exception/InfraException";
import { InitData } from "~/shared/data/read/InitData";
import { InfraData } from "~/shared/data/read/InfraData";
import { ReadFromRepository, ReadFromInitData } from "~/shared/type";

type Read = {
  object: { name: string; address: string; id: string; flg: boolean };
  payload: { id: number };
};

export type Repository = {
  fetchMe: ReadFromRepository<
    Read["payload"],
    InfraData<Read["object"]>,
    InfraException
  >;
};

export type WorkFlow = {
  fetchInitValue: (p: {
    repository: Repository;
  }) => ReadFromInitData<
    Read["payload"],
    InitData<Read["object"]>,
    InfraException
  >;
};
