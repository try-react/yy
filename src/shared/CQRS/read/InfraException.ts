// eslint-disable-next-line @typescript-eslint/no-explicit-any
type errObj = { message: string; error: any };

export class InfraException extends Error {
  public name = InfraException.name;

  private constructor(private _errObj: errObj) {
    super(JSON.stringify(_errObj));
  }

  get errObj(): errObj {
    return this._errObj;
  }

  static of(e: errObj): InfraException {
    return new InfraException(e);
  }
}
