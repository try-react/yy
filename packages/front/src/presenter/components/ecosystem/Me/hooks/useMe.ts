import { useState } from "react";
import type { UseMe } from "~/presenter/components/ecosystem/Me/hooks/type";

export const useMe: UseMe = ({ initData, service }) => {
  const [data] = useState(initData);

  return {
    domain: {
      me: {
        ...data,
      },
    },
    operations: {
      reRender: service.reRender,
    },
  };
};
