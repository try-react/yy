import { InfraException } from "~/shared/exception/InfraException";
import { InfraData } from "~/shared/data/read/InfraData";
import { env } from "~/shared/env";

const onFulfilled = <T>(r: T) => InfraData.of(r);
const onRejected = (e: unknown) => new InfraException(e);

type Fetcher = <T>(path: Path) => Promise<InfraData<T> | InfraException>;
type FindPath = (p: Name) => Path;
type Path = typeof pathCollection[number]["path"];
type Name = typeof pathCollection[number]["name"];

const pathCollection = [
  {
    name: "me",
    path: "/me",
  },
] as const;

export const findPath: FindPath = (name) =>
  pathCollection.filter((o) => o.name === name)[0].path;

export const fetcher: Fetcher = (path) =>
  fetch(`${env.basePath}${path}`)
    .then((r) => r.json())
    .then(onFulfilled)
    .catch(onRejected);
