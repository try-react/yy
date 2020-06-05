import type { Repository } from "~/domain/me";
import { fetchMe } from "~/infra/api/http/me";
import { InfraData } from "~/shared/data/read/InfraData";

/**
 * Domain.Repositoryが欲しい型に変更
 * 特に意味はないが、`flg`を付与
 */
export const repository: Repository = {
  fetchMe: (p) =>
    fetchMe(p)
      .then((res) =>
        res instanceof InfraData
          ? InfraData.of({ ...res.value, flg: true })
          : res
      )
      .catch<never>((e) => e),
};
