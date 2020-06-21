import type { Me } from "~/domain/me";
import type { UseCase } from "./selector";
import type { InitData } from "~/domain/me/type";
import { ReRender } from "~/presenter/hooks/useReRender";

type Domain = {
  me: Me;
};

type Props = {
  domain: Domain;
  app: Pick<ReRender, "cnt">;
  operations: {
    reRender: ReRender["reRenderByException"] | ReRender["reRenderBySuccess"];
  };
};

export type MapToNormalContentProps = (p: {
  initData: InitData;
  useCase: UseCase;
}) => Props;

export type MapToExceptionContentProps = (p: {
  useCase: UseCase;
}) => Pick<Props, "operations"> & Pick<Props, "app">;
