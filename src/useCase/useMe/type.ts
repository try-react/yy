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

type UseMeR = {
  domain: {
    name: string;
    address: string;
    id: string;
    flg: boolean;
  };
  operations: {
    reFetch: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  };
};

type UseMeP = {
  initData: InitData;
  service: {
    fetch: ReturnType<WorkFlow["getLatestInformationAboutMe"]>;
  };
};
export type UseMe = (p: UseMeP) => UseMeR;
