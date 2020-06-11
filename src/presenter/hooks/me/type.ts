import type { Me } from "~/domain/me";
import type { InitData } from "~/useCase/me/type";

type Status = "started" | "done" | "failed";

type State = {
  /**
   * meの情報
   */
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
    /**
     * 再取得中の状態 デバッグ用に表示
     */
    isAsync: boolean;
  };
  operations: {
    /**
     * 再取得処理の発火
     */
    reFetch: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    /**
     * 画面の再レンダリング
     */
    reRender: () => void;
  };
};

export type UseMe = (p: InitData) => State;
