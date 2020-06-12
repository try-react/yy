// eslint-disable-next-line @typescript-eslint/no-explicit-any
type errObj = { message: string; error: any };

export class DomainDataError extends Error {
  public name = DomainDataError.name;

  private constructor(private _errObj: errObj) {
    super(JSON.stringify(_errObj));
  }

  get value(): null {
    return null;
  }

  get errObj(): errObj {
    return this._errObj;
  }

  static throwError(e: errObj): never {
    throw new DomainDataError(e);
  }
}
