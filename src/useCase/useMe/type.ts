import type { LazyExoticComponent, FC } from "react";
import type { WorkFlow } from "~/domain/me";
import { DomainData } from "~/shared/typeGuard/read/Data";

type GetLatestInformationAboutMeR = ReturnType<
  WorkFlow["getLatestInformationAboutMe"]
>;

type InitData = ReturnType<GetLatestInformationAboutMeR> extends Promise<
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

export type UseMe = (p: InitData) => State;

type P = Parameters<WorkFlow["getLatestInformationAboutMe"]>[0];
export type Interactor = (p: {
  useMe: UseMe;
  repository: P["repository"];
  payload: P["payload"];
}) => LazyExoticComponent<FC>;
