import React, { lazy } from "react";
import {
  GatewayDataException,
  DomainDataException,
  ExternalInterfaceDataException,
} from "~/shared/typeGuard/Exception";
import { DomainData } from "~/shared/typeGuard/Data";
import type { LazyExoticComponent, FC } from "react";
import type { UseMe } from "~/useCase/useMe/type";

type ComponentSelectorP = {
  service: Parameters<UseMe>[0]["service"];
  useMe: UseMe;
};
type ComponentSelectorR = LazyExoticComponent<FC>;
type ComponentSelectorType = (p: ComponentSelectorP) => ComponentSelectorR;

export const ComponentSelector: ComponentSelectorType = ({ service, useMe }) =>
  lazy(() =>
    service
      .fetch()
      .then(async (res) => {
        if (res instanceof DomainData) {
          const { Content } = await import(
            "~/presenter/components/domain/Me/Content"
          );
          const Component = () => (
            <Content {...useMe({ initData: { ...res.value }, service })} />
          );
          return { default: Component };
        }

        if (
          res instanceof GatewayDataException ||
          res instanceof ExternalInterfaceDataException ||
          res instanceof DomainDataException
        ) {
          const { Exception } = await import(
            "~/presenter/components/domain/Me/Exception"
          );
          const Component = () => <Exception />;

          return { default: Component };
        }

        return Promise.reject(res);
      })
      .catch<never>((e) => e)
  );