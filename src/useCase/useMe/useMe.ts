import { useState, useEffect } from "react";
import { UseMe } from "./type";
import { DomainData } from "~/shared/typeGuard/read/Data";

/**
 * 再取得に関しての整理
 *
 * `useEffect`
 * 状態管理が複雑すぎる
 *
 */
export const useMe: UseMe = (props) => {
  const [data, setData] = useState(props.initData);
  const [reFetchFlg, setReFetchFlg] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    if (reFetchFlg === undefined) return () => {};
    let deletedFlg = false;
    props.service
      .fetch()
      .then(
        (r) => deletedFlg && r instanceof DomainData && setData({ ...r.value })
      )
      .catch<never>((e) => e);
    return () => (deletedFlg = true);
  }, [props.service, reFetchFlg]);

  return {
    domain: {
      ...data,
    },
    operations: {
      reFetch: () => {
        setReFetchFlg(!reFetchFlg);
      },
    },
  };
};
