type errObj = { message: string; error: Response };

export class ExternalInterfaceExceptionData extends Error {
  public name = ExternalInterfaceExceptionData.name;

  private constructor(private _errObj: errObj) {
    super(JSON.stringify(_errObj));
  }

  get errObj(): errObj {
    return this._errObj;
  }

  static of(e: errObj): ExternalInterfaceExceptionData {
    return new ExternalInterfaceExceptionData(e);
  }
}
