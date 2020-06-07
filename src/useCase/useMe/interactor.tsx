import React, { lazy } from "react";
import {
  GatewayDataException,
  DomainDataException,
  ExternalInterfaceDataException,
} from "~/shared/typeGuard/read/Exception";
import { DomainData } from "~/shared/typeGuard/read/Data";
import { workFlow } from "~/domain/me";
import { Interactor } from "./type";

export const interactor: Interactor = ({ repository, useMe, envParam }) =>
  lazy(() => {
    // useMeに渡す？
    const service = workFlow.getLatestInformationAboutMe({ repository });

    return service(envParam)
      .then(async (res) => {
        if (res instanceof DomainData) {
          const { Content } = await import(
            "~/presenter/components/ecosystem/Me/Content"
          );
          const Component = () => <Content {...useMe({ ...res.value })} />;
          return { default: Component };
        }

        if (
          res instanceof GatewayDataException ||
          res instanceof ExternalInterfaceDataException ||
          res instanceof DomainDataException
        ) {
          // console.dir(res);
          const { Exception } = await import(
            "~/presenter/components/ecosystem/Me/Exception"
          );
          const Component = () => <Exception />;

          return { default: Component };
        }

        return Promise.reject(res);
      })
      .catch<never>((e) => e);
  });
