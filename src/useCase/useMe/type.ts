import type { LazyExoticComponent, FC } from "react";
import type { WorkFlow } from "~/domain/me";
import { DomainData } from "~/shared/typeGuard/read/Data";

type GetLatestInformationAboutMeR = ReturnType<
  WorkFlow["getLatestInformationAboutMe"]
>;

type UseMeP = ReturnType<GetLatestInformationAboutMeR> extends Promise<infer U>
  ? U extends DomainData<infer V>
    ? V
    : never
  : never;

type UseMeR = {
  name: string;
  address: string;
  id: string;
  flg: boolean;
};

export type UseMe = (p: UseMeP) => UseMeR;

type InteractorP = {
  service: { fetch: GetLatestInformationAboutMeR };
  useMe: UseMe;
};

type InteractorR = LazyExoticComponent<FC>;
export type Interactor = (p: InteractorP) => InteractorR;
