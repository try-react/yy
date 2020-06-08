import { useState, useEffect } from "react";
import { UseMe } from "./type";
import { DomainData } from "~/shared/typeGuard/read/Data";

type Status = ReturnType<UseMe>["app"]["status"];

/**
 * 再取得に関しての整理
 *
 * `useEffect`
 * 状態管理が複雑すぎる
 *
 * ---
 *
 * 再帰処理の応用のこのほうが良い
 * - https://github.com/try-react/xx/blob/master/src/useCase/util/hooks/useLazyComponent.ts
 * - https://github.com/try-react/xx/blob/master/pages/profile.tsx
 */
export const useMe: UseMe = (props) => {
  const [data, setData] = useState(props.initData);
  const [reFetchFlg, setReFetchFlg] = useState<boolean | undefined>(undefined);
  const [status, setStatus] = useState<Status>("done");

  useEffect(() => {
    if (reFetchFlg === undefined) return () => {};
    setStatus("started");
    let deletedFlg = false;
    props.service
      .fetch()
      .then((r) => {
        if (deletedFlg) {
          return;
        }

        if (r instanceof DomainData) {
          setData({ ...r.value });
          setStatus("done");
          return;
        }

        Promise.reject(r);
      })
      .catch<never>((e) => {
        setStatus("failed");
        return e;
      });
    return () => (deletedFlg = true);
  }, [props.service, reFetchFlg]);

  return {
    domain: {
      me: {
        ...data,
      },
    },
    app: {
      status,
    },
    selectors: {
      isAsync: status !== "done",
    },
    operations: {
      reFetch: () => {
        setReFetchFlg(!reFetchFlg);
      },
    },
  };
};
