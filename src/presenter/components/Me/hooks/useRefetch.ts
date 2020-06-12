import { useState, useEffect } from "react";
import type { Dispatch, SetStateAction } from "react";
import type { UseMe } from "~/presenter/components/Me/hooks/type";
import { GatewayData } from "~/shared/typeGuard/Data";

type Status = ReturnType<UseMe>["app"]["status"];

/**
 * 再取得に関して (**もっとみる** などの事)
 *
 * ## `useEffect`を使用した場合
 * 一応実装してみたがぜんぜんだめ
 *
 * しっかり書くと状態管理が複雑すぎる
 * 再取得失敗した場合に、正常系Componentに任せる事になるので全然だめ
 */
export const useRefetch: UseRefetch = ({ service, setData }) => {
  const [reFetchFlg, setReFetchFlg] = useState<boolean | undefined>(undefined);
  const [status, setStatus] = useState<Status>("done");

  useEffect(() => {
    if (reFetchFlg === undefined) return () => {};

    setStatus("started");
    let deletedFlg = false;
    service()
      .fetch()
      .then((r) => {
        if (deletedFlg) {
          return;
        }

        if (r instanceof GatewayData) {
          setData({ ...r.value });
          setStatus("done");
          return;
        }

        // eslint-disable-next-line consistent-return
        return setStatus("failed");
      });

    return () => (deletedFlg = true);
  }, [reFetchFlg, service, setData]);

  return {
    status,
    reFetch: () => {
      setReFetchFlg(!reFetchFlg);
    },
    isAsync: status !== "done",
  };
};

type UseRefetch = (p: {
  service: Parameters<UseMe>[0]["service"];
  setData: Dispatch<SetStateAction<Parameters<UseMe>[0]["initData"]>>;
}) => {
  status: Status;
  reFetch: () => void;
  isAsync: boolean;
};
