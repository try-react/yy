import type { Me } from "~/domain/me";
import type { OutputProps } from "~/useCase/me/outputProps/type";
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

export type UseNormal = (p: {
  initData: InitData;
  service: OutputProps;
}) => Props;

export type UseException = (p: {
  service: OutputProps;
}) => Pick<Props, "operations"> & Pick<Props, "app">;
