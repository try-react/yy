import type { UseExceptionContent } from "~/presenter/components/ecosystem/Me/hooks/type";

export const useExceptionContent: UseExceptionContent = ({ service }) => ({
  app: {
    cnt: service.cnt,
  },
  operations: {
    reRender: service.reRender,
  },
});
