import React, { lazy } from "react";
import {
  GatewayDataException,
  DomainDataException,
  ExternalInterfaceDataException,
} from "~/shared/typeGuard/Exception";
import { DomainData } from "~/shared/typeGuard/Data";
import type { LazyExoticComponent, FC } from "react";
import { useMe } from "../../../../useCase/me/useMe";
import { repository } from "~/gateway/me";
import { workFlow } from "~/domain/me";
import type { UseReRender } from "~/presenter/hooks/useReRender";

const service = {
  fetch: workFlow.getLatestInformationAboutMe({
    repository,
    payload: { id: 123 }, // location などから取得
  }),
};

type ComponentInteractorType = (
  p: ReturnType<UseReRender>
) => LazyExoticComponent<FC>;

export const ComponentInteractor: ComponentInteractorType = ({ reRender }) =>
  lazy(() =>
    service
      .fetch()
      .then(async (res) => {
        if (res instanceof DomainData) {
          const { Content } = await import(
            "~/presenter/components/ecosystem/Me/Content"
          );
          const Component = () => (
            <Content
              {...useMe({ initData: { ...res.value }, service, reRender })}
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
