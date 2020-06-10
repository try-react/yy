import type { WorkFlow } from "~/domain/me/type";
import { DomainData } from "~/shared/typeGuard/Data";

type GetLatestInformationAboutMeR = ReturnType<
  WorkFlow["getLatestInformationAboutMe"]
>;

type DomainDataObj = ReturnType<GetLatestInformationAboutMeR> extends Promise<
  infer U
>
  ? U extends DomainData<infer V>
    ? V
    : never
  : never;

/**
 * controllerが外部からもらう値
 * SPAだと、URLパラメタやpages
 */
export type InputData = {
  id: number;
  reRender: () => void;
};

/**
 * presenter向けの初期値
 * InputDataとUseCaseを使い生成
 */
export type InitData = {
  reRender: () => void;
  service: ReturnType<Interactor>;
  initData: DomainDataObj;
};

/**
 * domainのworkFlowを使い値を生成する
 */
export type Interactor = (
  p: Parameters<WorkFlow["getLatestInformationAboutMe"]>[0]
) => () => {
  fetch: ReturnType<WorkFlow["getLatestInformationAboutMe"]>;
};
