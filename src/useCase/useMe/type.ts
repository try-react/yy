import type { WorkFlow, Repository, ReadModel } from "~/domain/me/type";

export type Interactor = (p: {
  repository: Repository;
}) => {
  fetchInitValue: ReturnType<WorkFlow["fetchInitValue"]>;
};

export type InitData = ReadModel["object"];

export type State = {
  name: string;
  address: string;
  id: string;
  flg: boolean;
};
