import React, { lazy } from "react";
import { ExternalInterfaceDataException } from "~/shared/typeGuard/Exception";
import { GatewayData } from "~/shared/typeGuard/Data";
import type { LazyExoticComponent, FC } from "react";
import { useMe } from "~/presenter/hooks/me";
import { interactor } from "~/useCase/me/interactor";
import { repository } from "~/gateway/repository/me";
import type { ControllerProps } from "~/useCase/me/type";

type MeType = (p: ControllerProps) => LazyExoticComponent<FC>;
const Me: MeType = ({ id, reRender }) =>
  lazy(() => {
    // importされたタイミングで再生成
    const service = interactor({
      repository,
      id,
    });

    return service()
      .fetch()
      .then(async (res) => {
        if (res instanceof GatewayData) {
          const { Content } = await import("~/presenter/components/Me/Content");
          const Component = () => (
            <Content
              {...useMe({ initData: { ...res.value }, service, reRender })}
            />
          );
          return { default: Component };
        }

        if (res instanceof ExternalInterfaceDataException) {
          const { Exception } = await import(
            "~/presenter/components/Me/Exception"
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
