import type { Me } from "~/domain/me";
import type { SelectorProps } from "~/useCase/me/type/SelectorProps";
import type { InitData } from "~/domain/me/type";
import { ReRender } from "~/presenter/hooks/useReRender";

type Props = {
  domain: {
    me: Me;
  };
  operations: {
    /**
     * 画面の再レンダリング
     */
    reRender: ReRender;
  };
};

export type UseMe = (p: {
  initData: InitData;
  service: SelectorProps;
}) => Props;
