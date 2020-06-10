// eslint-disable-next-line @typescript-eslint/no-explicit-any
type errObj = { message: string; error: any };

export class GatewayDataError extends Error {
  public name = GatewayDataError.name;

  private constructor(private _errObj: errObj) {
    super(JSON.stringify(_errObj));
  }

  get errObj(): errObj {
    return this._errObj;
  }

  static throwError(e: errObj): never {
    throw new GatewayDataError(e);
  }
}
