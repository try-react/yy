export abstract class Data<T> {
  protected constructor(private _value: T, protected _name: string) {}

  get value(): T {
    return { ...this._value } as const;
  }
}
