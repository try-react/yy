import { Data } from "./Data";

/**
 * Infraレイヤーで生成されたデータをつめる (正常系)
 */
export class InfraData<T> extends Data<T> {
  static of<V>(v: V): InfraData<V> {
    return new InfraData(v, InfraData.name);
  }

  /**
   *  `instanceof`で判定出来ない場合用
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
  static isMaybeInfraData(v: any): boolean {
    return v?._name === InfraData.name;
  }

  static getMaybeInfraDataValue<V>(v: { _value: V }): V {
    return v?._value;
  }
}
