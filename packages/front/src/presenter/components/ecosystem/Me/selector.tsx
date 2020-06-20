import React, { lazy } from "react";
import { ExternalInterfaceExceptionData } from "~/shared/typeGuard/Exception";
import { GatewayData } from "~/shared/typeGuard/Data";
import type { LazyExoticComponent, FC } from "react";
import { useNormal } from "./hooks/useNormal";
import { useException } from "./hooks/useException";
import type { OutputProps } from "~/useCase/me/outputProps/type";
import { onRejected } from "~/presenter/containers/ThrowError";

type Selector = (p: OutputProps) => LazyExoticComponent<FC>;
export const selector: Selector = (service) =>
  lazy(() =>
    service
      .fetch()
      .then(async (res) => {
        /**
         * 正常系
         */
        if (res instanceof GatewayData) {
          const { Normal } = await import(
            "~/presenter/components/ecosystem/Me/Content/Normal"
          );
          const Component = () => (
            <Normal {...useNormal({ initData: { ...res.value }, service })} />
          );
          return { default: Component };
        }

        /**
         * APIの結果に問題があったが、再取得を促す
         */
        if (res instanceof ExternalInterfaceExceptionData) {
          const { Exception } = await import(
            "~/presenter/components/ecosystem/Me/Content/Exception"
          );
          const Component = () => <Exception {...useException({ service })} />;
          return { default: Component };
        }
        return Promise.reject(res);
      })
      .catch(onRejected)
  );
