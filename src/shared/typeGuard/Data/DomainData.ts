import { Data } from "./Data";

/**
 * Domainレイヤーで生成されたデータをつめる (正常系)
 */
export class DomainData<T> extends Data<T> {
  static of<V>(v: V): DomainData<V> {
    return new DomainData(v, DomainData.name);
  }

  /**
   *  `instanceof`で判定出来ない場合用
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
  static isMaybeDomainData(v: any): boolean {
    return v?._name === DomainData.name;
  }

  static getMaybeDomainDataValue<V>(v: { _value: V }): V {
    return v?._value;
  }
}
