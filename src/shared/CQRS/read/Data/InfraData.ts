import { Data } from "./Data";

/**
 * Infraレイヤーで生成されたデータをつめる (正常系)
 */
export class InfraData<T> extends Data<T> {
  static of<V>(v: V): InfraData<V> {
    return new InfraData(v);
  }
}
