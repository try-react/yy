export abstract class Data<T> {
  protected constructor(private _value: T) {}

  get value(): T {
    const v = { ...this._value } as const;
    return v;
  }
}
