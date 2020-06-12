type errObj = { message: string; error: Response };

export class ExternalInterfaceDataException extends Error {
  public name = ExternalInterfaceDataException.name;

  private constructor(private _errObj: errObj) {
    super(JSON.stringify(_errObj));
  }

  get value(): null {
    return null;
  }

  get errObj(): errObj {
    return this._errObj;
  }

  static of(e: errObj): ExternalInterfaceDataException {
    return new ExternalInterfaceDataException(e);
  }

  /**
   *  `instanceof`で判定出来ない場合用
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
  static isMaybeDomainDataException(v: any): boolean {
    return v?.name === ExternalInterfaceDataException.name;
  }
}
