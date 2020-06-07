type errObj = { message: string; error: Response };

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

  /**
   *  `instanceof`で判定出来ない場合用
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
  static isMaybeDomainDataException(v: any): boolean {
    return v?.name === InfraException.name;
  }
}
