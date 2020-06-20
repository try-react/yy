import type { UseException } from "~/presenter/components/ecosystem/Me/hooks/type";

// useのprefixは、不要だが
export const useException: UseException = ({ service }) => ({
  app: {
    cnt: service.cnt,
  },
  operations: {
    reRender: service.reRenderByException,
  },
});
