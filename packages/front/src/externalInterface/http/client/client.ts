import { ExternalInterfaceExceptionData } from "~/shared/typeGuard/Exception";
import { ExternalInterfaceData } from "~/shared/typeGuard/Data";
import { env } from "~/externalInterface/env";
import type { Path } from "./util";
import wretch from "wretch";

const onFulfilled = <T>(r: T) => ExternalInterfaceData.of(r);
const onRejected = (error: Response) =>
  ExternalInterfaceExceptionData.of({
    message: "ExternalInterfaceExceptionDataの例外が発生しました。",
    error,
  });

type Get = <T>(
  path: Path,
  query?: string
) => Promise<ExternalInterfaceData<T> | ExternalInterfaceExceptionData>;

const get: Get = (path, query = "") =>
  wretch(`${env.basePath}${path}${query}`)
    .get()
    /**
     * type が `{[key: string]: any}` になるため `never`で封印
     */
    .json<never>()
    .then(onFulfilled)
    .catch(onRejected);

type HttpClient = {
  get: Get;
};

export const httpClient: HttpClient = {
  get,
};
