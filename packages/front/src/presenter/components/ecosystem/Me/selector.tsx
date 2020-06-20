import React, { lazy, FC } from "react";
import { ExternalInterfaceExceptionData } from "~/shared/typeGuard/Exception";
import { GatewayData } from "~/shared/typeGuard/Data";
import type { LazyExoticComponent } from "react";
import { useNormal } from "./hooks/useNormal";
import { useException } from "./hooks/useException";
import { onRejected } from "~/presenter/containers/ThrowError";
import type { Interactor } from "~/useCase/me/interactor/type";
import type { ReRender } from "~/presenter/hooks/useReRender";

export type UseCase = ReturnType<Interactor> & ReRender;
type Selector = (p: { useCase: UseCase }) => LazyExoticComponent<FC>;

export const selector: Selector = ({ useCase }) =>
  lazy(() =>
    useCase
      .fetch()
      .then(async (res) => {
        if (res instanceof GatewayData) {
          const { Normal } = await import(
            "~/presenter/components/ecosystem/Me/Content/Normal"
          );
          const Component = () => (
            <Normal {...useNormal({ initData: { ...res.value }, useCase })} />
          );
          return { default: Component };
        }

        if (res instanceof ExternalInterfaceExceptionData) {
          const { Exception } = await import(
            "~/presenter/components/ecosystem/Me/Content/Exception"
          );
          const Component = () => <Exception {...useException({ useCase })} />;
          return { default: Component };
        }
        return Promise.reject(res);
      })
      .catch(onRejected)
  );
