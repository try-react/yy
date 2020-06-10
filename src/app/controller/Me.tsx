import React, { lazy } from "react";
import { ExternalInterfaceDataException } from "~/shared/typeGuard/Exception";
import { GatewayData } from "~/shared/typeGuard/Data";
import type { LazyExoticComponent, FC } from "react";
import { useMe } from "~/app/presenter/hooks/me";
import { interactor } from "~/useCase/me/interactor";
import type { UseReRender } from "~/app/presenter/hooks/common/useReRender";
import { repository } from "~/app/gateway/repository/me";

type MeType = (
  p: ReturnType<UseReRender> & { id: number }
) => LazyExoticComponent<FC>;

const Me: MeType = ({ reRender, id }) =>
  lazy(() => {
    const service = interactor({
      repository,
      payload: { id },
    });

    return service()
      .fetch()
      .then(async (res) => {
        if (res instanceof GatewayData) {
          const { Content } = await import(
            "~/app/presenter/components/Me/Content"
          );
          const Component = () => (
            <Content
              {...useMe({ initData: { ...res.value }, reRender, service })}
            />
          );
          return { default: Component };
        }

        if (res instanceof ExternalInterfaceDataException) {
          const { Exception } = await import(
            "~/app/presenter/components/Me/Exception"
          );
          const Component = () => <Exception />;

          return { default: Component };
        }

        return Promise.reject();
      });
  });

export const controller = {
  Me,
};
