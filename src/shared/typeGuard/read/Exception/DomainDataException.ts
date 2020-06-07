// eslint-disable-next-line @typescript-eslint/no-explicit-any
type errObj = { message: string; error: any };

export class DomainDataException extends Error {
  public name = DomainDataException.name;

  private constructor(private _errObj: errObj) {
    super(JSON.stringify(_errObj));
  }

  get errObj(): errObj {
    return this._errObj;
  }

  static of(e: errObj): DomainDataException {
    return new DomainDataException(e);
  }

  /**
   *  `instanceof`で判定出来ない場合用
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
  static isMaybeDomainDataException(v: any): boolean {
    return v?.name === DomainDataException.name;
  }
}
