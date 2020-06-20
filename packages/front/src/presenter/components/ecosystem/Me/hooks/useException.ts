import type { UseException } from "~/presenter/components/ecosystem/Me/hooks/type";

export const useException: UseException = ({ service }) => ({
  app: {
    cnt: service.cnt,
  },
  operations: {
    reRender: service.reRender,
  },
});
