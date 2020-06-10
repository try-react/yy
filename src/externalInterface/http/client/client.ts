import { ExternalInterfaceDataException } from "~/shared/typeGuard/Exception";
import { ExternalInterfaceData } from "~/shared/typeGuard/Data";
import { env } from "~/externalInterface/env";
import type { Path } from "./util";

const onFulfilled = <T>(r: T) => ExternalInterfaceData.of(r);
const onRejected = (error: Response) =>
  ExternalInterfaceDataException.of({
    message: "ExternalInterfaceDataExceptionの例外が発生しました。",
    error,
  });

type Get = <T>(
  path: Path
) => Promise<ExternalInterfaceData<T> | ExternalInterfaceDataException>;
const get: Get = (path) =>
  fetch(`${env.basePath}${path}`)
    .then((r) => (r.ok ? r.json() : Promise.reject(r))) // 2XX
    .then(onFulfilled)
    .catch(onRejected);

type HttpClient = {
  get: Get;
};

export const httpClient: HttpClient = {
  get,
};
