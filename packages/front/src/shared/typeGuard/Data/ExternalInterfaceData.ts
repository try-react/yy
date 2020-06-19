import { Data } from "./Data";

/**
 * Gatewayで生成されたデータをつめる (正常系)
 */
export class ExternalInterfaceData<T> extends Data<T> {
  static of<V>(v: V): ExternalInterfaceData<V> {
    return new ExternalInterfaceData(v, ExternalInterfaceData.name);
  }

  /**
   * ORM適用向け
   */
  map<R>(fn: (val: T) => R): ExternalInterfaceData<R> {
    return ExternalInterfaceData.of(fn(this.value));
  }
}
