import React, { lazy } from "react";
import { ExternalInterfaceDataException } from "~/shared/typeGuard/Exception";
import { GatewayData } from "~/shared/typeGuard/Data";
import type { LazyExoticComponent, FC } from "react";
import { useMe } from "./hooks/useMe";
import type { SelectorProps } from "~/useCase/me/type/SelectorProps";

type Selector = (p: SelectorProps) => LazyExoticComponent<FC>;
export const selector: Selector = (service) =>
  lazy(() =>
    service
      .fetch()
      .then(async (res) => {
        if (res instanceof GatewayData) {
          const { Content } = await import(
            "~/presenter/components/ecosystem/Me/Content"
          );
          const Component = () => (
            <Content {...useMe({ initData: { ...res.value }, service })} />
          );
          return { default: Component };
        }

        if (res instanceof ExternalInterfaceDataException) {
          const { Exception } = await import(
            "~/presenter/components/ecosystem/Me/Exception"
          );
          const Component = () => <Exception />;

          return { default: Component };
        }

        // 想定外のエラー
        return Promise.reject(res);
      })
      .catch(async () => {
        const { Err } = await import("~/presenter/components/ecosystem/Me/Err");
        const Component = () => <Err />;
        return { default: Component };
      })
  );
