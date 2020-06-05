/**
 * APIの実行結果を詰める (正常系)
 */
export class InfraData<T> {
  private constructor(private _value: T) {}

  get value(): T {
    const v = { ...this._value } as const;
    return v;
  }

  static of<V>(v: V): InfraData<V> {
    return new InfraData(v);
  }
}
