import { useState } from "react";
import type { UseMe } from "~/presenter/hooks/me/useMe/type";
import { useRefetch } from "./useRefetch";

export const useMe: UseMe = ({ initData, service, reRender }) => {
  const [data, setData] = useState(initData);
  const { status, reFetch } = useRefetch({
    service,
    setData,
  });

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
      reFetch,
      reRender,
    },
  };
};
