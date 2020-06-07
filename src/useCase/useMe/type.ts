import type { WorkFlow } from "~/domain/me/type";
import type { DomainData } from "~/shared/CQRS/read/Data/DomainData";

export type Interactor = {
  fetchInitValue: ReturnType<WorkFlow["fetchInitValue"]>;
  getEnv: () => { id: number }; // locationなど
};

export type InitData = ReturnType<Interactor["fetchInitValue"]> extends Promise<
  infer U
>
  ? U extends DomainData<infer V>
    ? V
    : never
  : never;

export type State = {
  name: string;
  address: string;
  id: string;
  flg: boolean;
};
