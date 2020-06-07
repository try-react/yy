import React, { lazy } from "react";
import {
  GatewayDataException,
  DomainDataException,
  ExternalInterfaceDataException,
} from "~/shared/typeGuard/read/Exception";
import { DomainData } from "~/shared/typeGuard/read/Data";
import type { LazyExoticComponent, FC } from "react";
import { workFlow } from "~/domain/me";
import type { WorkFlow } from "~/domain/me";
import { Repository } from "~/domain/me/type";
import type { UseMe } from "./type";

type Interactor = (p: {
  repository: Repository;
  useMe: UseMe;
  envParam: Parameters<ReturnType<WorkFlow["fetchInitValue"]>>[0];
}) => LazyExoticComponent<FC>;

export const interactor: Interactor = ({ repository, useMe, envParam }) =>
  lazy(() => {
    // useMeに渡す？
    const service = workFlow.fetchInitValue({ repository });

    return service(envParam)
      .then(async (res) => {
        if (res instanceof DomainData) {
          const { Content } = await import(
            "~/presenter/components/ecosystem/Me/Content"
          );
          const Component = () => <Content {...useMe({ ...res.value })} />;

          return { default: Component };
        }

        // Exception なまえ
        if (
          res instanceof GatewayDataException ||
          res instanceof ExternalInterfaceDataException ||
          res instanceof DomainDataException
        ) {
          console.dir(res);
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
