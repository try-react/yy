import type { UseNormal } from "~/presenter/components/ecosystem/Me/hooks/type";

// useのprefixは、不要だが
export const useNormal: UseNormal = ({ initData, useCase }) => ({
  domain: {
    me: {
      ...initData,
    },
  },
  app: {
    cnt: useCase.cnt,
  },
  operations: {
    reRender: useCase.reRenderBySuccess,
  },
});
