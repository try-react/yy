import { useState, useEffect } from "react";
import type { Dispatch, SetStateAction } from "react";
import type { MapToNormalContentProps } from "~/presenter/components/ecosystem/Me/util/type";
import { GatewayData } from "~/shared/typeGuard/Data";

type Status = "started" | "done" | "failed";

type UseRefetch = (p: {
  useCase: Parameters<MapToNormalContentProps>[0]["useCase"];
  setData: Dispatch<
    SetStateAction<Parameters<MapToNormalContentProps>[0]["initData"]>
  >;
}) => {
  status: Status;
  reFetch: () => void;
  isAsync: boolean;
};

/**
 * 再取得に処理 (**もっとみる** などの事)
 *
 * `useEffect`を使用して実装してみたがぜんぜんだめ。状態管理が複雑すぎる
 * 再取得失敗した場合を考慮するとこれもつらい
 *
 * Reduxに頼るのもありだが、`lazy`のほうが 軽量で良い
 */
export const useRefetch: UseRefetch = ({ useCase, setData }) => {
  const [reFetchFlg, setReFetchFlg] = useState<boolean>(false);
  const [status, setStatus] = useState<Status>("done");

  useEffect(() => {
    setStatus("started");
    let deletedFlg = false;
    useCase.fetch().then((r) => {
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

    return () => {
      deletedFlg = true;
    };
  }, [reFetchFlg, useCase, setData]);

  return {
    status,
    reFetch: () => {
      setReFetchFlg(!reFetchFlg);
    },
    isAsync: status !== "done",
  };
};
