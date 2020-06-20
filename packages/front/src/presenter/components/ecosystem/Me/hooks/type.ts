import type { Me } from "~/domain/me";
import type { UseCase } from "../Container/selector";
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

export type UseNormal = (p: { initData: InitData; useCase: UseCase }) => Props;

export type UseException = (p: {
  useCase: UseCase;
}) => Pick<Props, "operations"> & Pick<Props, "app">;
