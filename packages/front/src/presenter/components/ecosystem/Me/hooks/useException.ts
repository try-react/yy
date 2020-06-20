import type { UseException } from "~/presenter/components/ecosystem/Me/hooks/type";

// useのprefixは、不要だが
export const useException: UseException = ({ useCase }) => ({
  app: {
    cnt: useCase.cnt,
  },
  operations: {
    reRender: useCase.reRenderByException,
  },
});
