/**
 * Domainレイヤーで生成されたデータをつめる (正常系)
 */
export class DomainData<T> {
  private constructor(private _value: T) {}

  get value(): T {
    const v = { ...this._value } as const;
    return v;
  }

  static of<V>(v: V): DomainData<V> {
    return new DomainData(v);
  }
}
