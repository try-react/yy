import type { InfraData } from "~/shared/data/read/InfraData";
import type { InfraException } from "~/shared/exception/InfraException";
import type { InitData } from "~/shared/data/read/InitData";

/**
 * `Repository`から取得する処理用の型
 * `extends` で戻りの型を強制
 */
export type ReadFromRepository<
  Payload,
  L extends InfraData<unknown>,
  R extends InfraException
> = (p: Payload) => Promise<L | R>;

/**
 * `InitData`取得処理用の型
 * `extends` で戻りの型を強制
 */
export type ReadFromInitData<
  Payload,
  L extends InitData<unknown>,
  R extends InfraException
> = (p: Payload) => Promise<L | R>;
