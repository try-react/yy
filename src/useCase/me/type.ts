import type { Repository } from "~/domain/me/type";
import { DomainData } from "~/shared/typeGuard/Data";
import { ReadonlyDeep } from "type-fest";

/**
 * `controller`でキックされます
 * `hooks`や`Component`の初期値を取得します
 * 初期値取得後は、自分自身を`hooks`や`Component`に渡します
 * 再取得処理などで利用します
 */
export type Interactor = (p: {
  repository: Repository;
  id: InputData["id"];
}) => () => {
  fetch: () => ReturnType<Repository["fetchMe"]>;
};

/**
 * controllerが外部からもらう値
 * SPAだと、URLパラメタやpagesからもらう値
 */
export type InputData = ReadonlyDeep<{
  id: number;
  reRender: () => void;
}>;

/**
 * presenter向けの初期値
 * InputDataとUseCaseを使い生成
 * OutputDataに相当
 */
export type Props = {
  service: ReturnType<Interactor>;
  initData: InitData;
  reRender: InputData["reRender"];
};

type InitData = ReturnType<Repository["fetchMe"]> extends Promise<infer U>
  ? U extends DomainData<infer V>
    ? V
    : never
  : never;
