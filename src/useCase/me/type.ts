import type { Repository } from "~/domain/me/type";
import { DomainData } from "~/shared/typeGuard/Data";

/**
 * controllerが外部からもらう値
 * SPAだと、URLパラメタやpagesからもらう値
 */
export type InputData = {
  id: number;
  reRender: () => void;
};

/**
 * domainのworkFlowを使い値を生成する
 */
export type Interactor = (p: {
  repository: Repository;
  id: InputData["id"];
}) => () => {
  fetch: () => ReturnType<Repository["fetchMe"]>;
};

// ----------------

type InitData = ReturnType<Repository["fetchMe"]> extends Promise<infer U>
  ? U extends DomainData<infer V>
    ? V
    : never
  : never;

/**
 * presenter向けの初期値
 * InputDataとUseCaseを使い生成
 * OutputDataに相当
 */
export type Props = {
  service: ReturnType<Interactor>;
  initData: InitData;
  reRender: () => void;
};
