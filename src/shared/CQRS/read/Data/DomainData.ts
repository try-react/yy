import { Data } from "./Data";

/**
 * Domainレイヤーで生成されたデータをつめる (正常系)
 */
export class DomainData<T> extends Data<T> {
  static of<V>(v: V): DomainData<V> {
    return new DomainData(v);
  }
}
