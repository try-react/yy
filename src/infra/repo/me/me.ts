import type { Repository } from "~/domain/me";
import { fetchMe } from "~/infra/api/http/me";
import { InfraData } from "~/shared/data/read/InfraData";
import { InfraException } from "~/shared/exception/InfraException";

/**
 * Domain.Repositoryが欲しい型に変更
 * 特に意味はないが、`flg`を付与
 */
export const repository: Repository = {
  fetchMe: (p) =>
    fetchMe(p)
      .then((res) => {
        if (res instanceof InfraData) {
          return InfraData.of({ ...res.value, flg: true });
        }
        if (res instanceof InfraException) {
          return res;
        }
        return Promise.reject(res);
      })
      .catch<never>((e) => e),
};
