import { InfraException } from "~/shared/typeGuard/read/Exception";
import { InfraData } from "~/shared/typeGuard/read/Data";
import { env } from "~/shared/env";
import type { Path } from "./util";

const onFulfilled = <T>(r: T) => InfraData.of(r);
const onRejected = (error: Response) =>
  InfraException.of({
    message: "InfraExceptionの例外が発生しました。",
    error,
  });

type Get = <T>(path: Path) => Promise<InfraData<T> | InfraException>;
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
