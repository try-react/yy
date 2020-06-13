import type { UseMe } from "~/presenter/components/ecosystem/Me/hooks/type";

// useのprefixは、不要だが
export const useMe: UseMe = ({ initData, service }) => ({
  domain: {
    me: {
      ...initData,
    },
  },
  operations: {
    reRender: service.reRender,
  },
});
