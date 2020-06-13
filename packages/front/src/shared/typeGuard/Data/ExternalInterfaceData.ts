import { Data } from "./Data";

/**
 * Gatewayで生成されたデータをつめる (正常系)
 */
export class ExternalInterfaceData<T> extends Data<T> {
  static of<V>(v: V): ExternalInterfaceData<V> {
    return new ExternalInterfaceData(v, ExternalInterfaceData.name);
  }

  /**
   *  `instanceof`で判定出来ない場合用
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
  static isMaybeExternalInterfaceData(v: any): boolean {
    return v?._name === ExternalInterfaceData.name;
  }

  static getMaybeExternalInterfaceDataValue<V>(v: { _value: V }): V {
    return v?._value;
  }
}
