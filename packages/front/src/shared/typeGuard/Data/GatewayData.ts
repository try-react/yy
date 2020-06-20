import { Data } from "./Data";

/**
 * Gatewayで生成されたデータをつめる (正常系)
 */
export class GatewayData<T> extends Data<T> {
  static of<V>(v: V): GatewayData<V> {
    return new GatewayData(v, GatewayData.name);
  }
}
