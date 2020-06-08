import type { WorkFlow, Me } from "~/domain/me";
import { DomainData } from "~/shared/typeGuard/Data";
type Status = "started" | "done" | "failed";

type GetLatestInformationAboutMeR = ReturnType<
  WorkFlow["getLatestInformationAboutMe"]
>;

type InitData = ReturnType<GetLatestInformationAboutMeR> extends Promise<
  infer U
>
  ? U extends DomainData<infer V>
    ? V
    : never
  : never;

type UseMeR = {
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
  };
};

type UseMeP = {
  initData: InitData;
  service: {
    fetch: ReturnType<WorkFlow["getLatestInformationAboutMe"]>;
  };
};

export type UseMe = (p: UseMeP) => UseMeR;
