import type { UseContent } from "~/presenter/components/ecosystem/Me/hooks/type";

// useのprefixは、不要だが
export const useContent: UseContent = ({ initData, service }) => ({
  domain: {
    me: {
      ...initData,
    },
  },
  app: {
    cnt: service.cnt,
  },
  operations: {
    reRender: service.reRender,
  },
});
