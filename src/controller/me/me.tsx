import React, { lazy } from "react";
import {
  GatewayDataException,
  DomainDataException,
  ExternalInterfaceDataException,
} from "~/shared/typeGuard/Exception";
import { DomainData } from "~/shared/typeGuard/Data";
import type { LazyExoticComponent, FC } from "react";
import { useMe } from "~/useCase/me/useMe";
import { interactor as _interactor } from "~/useCase/me/interactor";
import type { UseReRender } from "~/presenter/hooks/useReRender";
import { repository } from "~/gateway/me";

// このしょりは、 lazyのメソッド内でもOK
const interactor = _interactor({
  repository,
  // location などから取得
  payload: { id: 123 },
});

type Me = (p: ReturnType<UseReRender>) => LazyExoticComponent<FC>;
export const me: Me = ({ reRender }) =>
  lazy(() =>
    interactor
      .fetch()
      .then(async (res) => {
        if (res instanceof DomainData) {
          const { Content } = await import(
            "~/presenter/components/ecosystem/Me/Content"
          );
          const Component = () => (
            <Content
              {...useMe({ initData: { ...res.value }, reRender, interactor })}
            />
          );
          return { default: Component };
        }

        if (
          res instanceof GatewayDataException ||
          res instanceof ExternalInterfaceDataException ||
          res instanceof DomainDataException
        ) {
          const { Exception } = await import(
            "~/presenter/components/ecosystem/Me/Exception"
          );
          const Component = () => <Exception />;

          return { default: Component };
        }

        return Promise.reject(res);
      })
      .catch<never>((e) => e)
  );
