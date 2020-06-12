import { useState } from "react";
import type { UseMe } from "~/presenter/components/Me/hooks/type";
import { useRefetch } from "./useRefetch";

export const useMe: UseMe = ({ initData, service, reRender }) => {
  const [data, setData] = useState(initData);
  const { status, reFetch, isAsync } = useRefetch({
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
      isAsync,
    },
    operations: {
      reFetch,
      reRender,
    },
  };
};
