/**
 * Infraレイヤーで生成されたデータをつめる (正常系)
 */
export class InfraData<T> {
  private constructor(private _value: T) {}

  get value(): T {
    return { ...this._value };
  }

  static of<V>(v: V): InfraData<V> {
    return new InfraData(v);
  }
}
