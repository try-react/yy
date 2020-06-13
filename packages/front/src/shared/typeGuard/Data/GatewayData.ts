import { Data } from "./Data";

/**
 * Gatewayで生成されたデータをつめる (正常系)
 */
export class GatewayData<T> extends Data<T> {
  static of<V>(v: V): GatewayData<V> {
    return new GatewayData(v, GatewayData.name);
  }

  /**
   *  `instanceof`で判定出来ない場合用
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
  static isMaybeGatewayData(v: any): boolean {
    return v?._name === GatewayData.name;
  }

  static getMaybeGatewayDataValue<V>(v: { _value: V }): V {
    return v?._value;
  }
}
