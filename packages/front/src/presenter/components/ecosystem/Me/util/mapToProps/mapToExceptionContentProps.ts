import type { MapToExceptionContentProps } from "~/presenter/components/ecosystem/Me/util/type";

export const mapToExceptionContentProps: MapToExceptionContentProps = ({
  useCase,
}) => ({
  app: {
    cnt: useCase.cnt,
  },
  operations: {
    reRender: useCase.reRenderByException,
  },
});
