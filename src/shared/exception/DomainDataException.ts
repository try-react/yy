export class DomainDataException extends Error {
  // TODO private
  // TODO import { ReadonlyDeep } from "type-fest";
  constructor(private _response: unknown) {
    super();
    this.name = DomainDataException.name;
  }
}
