import type { MapToNormalContentProps } from "~/presenter/components/ecosystem/Me/util/type";

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
