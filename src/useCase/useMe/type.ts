import { Repository } from "~/domain/me/type";
import type { WorkFlow } from "~/domain/me";
import type { LazyExoticComponent, FC } from "react";
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

export type Interactor = (p: {
  repository: Repository;
  useMe: UseMe;
  envParam: Parameters<GetLatestInformationAboutMeR>[0];
}) => LazyExoticComponent<FC>;
