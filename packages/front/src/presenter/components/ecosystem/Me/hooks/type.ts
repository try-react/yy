import type { Me } from "~/domain/me";
import type { SelectorProps } from "~/useCase/me/type/SelectorProps";
import type { InitData } from "~/domain/me/type";
import { ReRender } from "~/presenter/hooks/useReRender";

type Domain = {
  me: Me;
};

type Props = {
  domain: Domain;
  app: Pick<ReRender, "cnt">;
  operations: Pick<ReRender, "reRender">;
};

export type UseContent = (p: {
  initData: InitData;
  service: SelectorProps;
}) => Props;

export type UseExceptionContent = (p: {
  service: SelectorProps;
}) => Pick<Props, "operations"> & Pick<Props, "app">;
