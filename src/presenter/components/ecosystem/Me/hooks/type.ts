import type { Me } from "~/domain/me";
import type { SelectorProps } from "~/useCase/me/type/SelectorProps";
import type { InitData } from "~/domain/me/type";

type Status = "started" | "done" | "failed";

type Props = {
  domain: {
    me: Me;
  };
  app: {
    /**
     * 再取得中の状態の**テキスト**
     * デバッグ用に表示
     */
    status: Status;
  };
  selectors: {
    isAsync: boolean;
  };
  operations: {
    /**
     * 再取得処理の発火
     * 検証のの実装
     */
    reFetch: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    /**
     * 画面の再レンダリング
     */
    reRender: () => void;
  };
};

export type UseMe = (p: {
  initData: InitData;
  service: SelectorProps;
}) => Props;
