import React, { lazy } from "react";
import {
  InfraException,
  DomainDataException,
} from "~/shared/typeGuard/read/Exception";
import { DomainData } from "~/shared/typeGuard/read/Data";
import { useMe, interactor } from "~/useCase/useMe";
import { Create } from "./type";

export const create: Create = () =>
  lazy(() =>
    interactor
      .fetchInitValue(interactor.getEnv())
      .then(async (res) => {
        if (res instanceof DomainData) {
          const { Content } = await import(
            "~/presenter/components/ecosystem/Me/Content"
          );
          const Component = () => <Content {...useMe({ ...res.value })} />;

          return { default: Component };
        }

        if (res instanceof InfraException) {
          const { Exception } = await import(
            "~/presenter/components/ecosystem/Me/Exception"
          );
          const Component = () => <Exception />;

          return { default: Component };
        }

        if (res instanceof DomainDataException) {
          return Promise.reject(res);
        }

        return Promise.reject(res);
      })
      .catch<never>((e) => e)
  );
