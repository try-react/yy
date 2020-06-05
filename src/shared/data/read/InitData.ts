/**
 * useCase用の初期値を詰める (正常系)
 */
export class InitData<T> {
  private constructor(private _value: T) {}

  get value(): T {
    const v = { ...this._value } as const;
    return v;
  }

  static of<V>(v: V): InitData<V> {
    return new InitData(v);
  }
}
