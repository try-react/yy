import { useState, useEffect } from "react";
import { UseMe } from "./type";
import { DomainData } from "~/shared/typeGuard/read/Data";

type Status = ReturnType<UseMe>["app"]["status"];

/**
 * 再取得に関しての整理 例えば、**もっとみる** などの事
 *
 * ## `useEffect`を使用した場合
 * 一応書いてみたがぜんぜんだめ
 *
 * しっかり書くと状態管理が複雑すぎる
 * 再取得失敗した場合に、正常系Componentに任せる事になるので全然だめ
 *
 * ---
 *
 * ## `lazy`, `Dynamic import`を使用した場合
 * 癖が強いが入り口から分けられるのは良い
 *
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
        // eslint-disable-next-line consistent-return
        return Promise.reject(r);
      })
      .catch<never>((e) => {
        setStatus("failed");
        return e;
      });
    return () => (deletedFlg = true);
  }, [props.service, reFetchFlg, setStatus]);

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
