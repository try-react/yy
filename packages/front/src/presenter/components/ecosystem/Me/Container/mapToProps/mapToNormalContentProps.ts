import type { MapToNormalContentProps } from "~/presenter/components/ecosystem/Me/Container/type";

export const mapToNormalContentProps: MapToNormalContentProps = ({
  initData,
  useCase,
}) => ({
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
