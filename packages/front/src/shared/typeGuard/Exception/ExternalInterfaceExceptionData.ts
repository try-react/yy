type errObj = { message: string; error: Response };

export class ExternalInterfaceExceptionData extends Error {
  public name = ExternalInterfaceExceptionData.name;

  private constructor(private _errObj: errObj) {
    super(JSON.stringify(_errObj));
  }

  get value(): null {
    return null;
  }

  get errObj(): errObj {
    return this._errObj;
  }

  static of(e: errObj): ExternalInterfaceExceptionData {
    return new ExternalInterfaceExceptionData(e);
  }

  /**
   *  `instanceof`で判定出来ない場合用
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
  static isMaybeExternalInterfaceExceptionData(v: any): boolean {
    return v?.name === ExternalInterfaceExceptionData.name;
  }
}
