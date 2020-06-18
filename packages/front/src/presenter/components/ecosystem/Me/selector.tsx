import React, { lazy } from "react";
import { ExternalInterfaceDataException } from "~/shared/typeGuard/Exception";
import { GatewayData } from "~/shared/typeGuard/Data";
import type { LazyExoticComponent, FC } from "react";
import { useContent } from "./hooks/useContent";
import type { SelectorProps } from "~/useCase/me/type/SelectorProps";

type Selector = (p: SelectorProps) => LazyExoticComponent<FC>;
export const selector: Selector = (service) =>
  lazy(() =>
    service
      .fetch()
      .then(async (res) => {
        /**
         * 正常系
         */
        if (res instanceof GatewayData) {
          const { Content } = await import(
            "~/presenter/components/ecosystem/Me/Content"
          );
          const Component = () => (
            <Content {...useContent({ initData: { ...res.value }, service })} />
          );
          return { default: Component };
        }

        /**
         * APIに問題があるが、想定内
         */
        if (res instanceof ExternalInterfaceDataException) {
          const { ExceptionContent } = await import(
            "~/presenter/components/ecosystem/Me/ExceptionContent"
          );
          const Component = () => <ExceptionContent />;
          return { default: Component };
        }

        return Promise.reject(res);
      })
      .catch(async () => {
        /**
         * 想定外のエラー
         */
        const { ErrorContent } = await import(
          "~/presenter/components/ecosystem/Me/ErrorContent"
        );
        const Component = () => <ErrorContent />;
        return { default: Component };
      })
  );
