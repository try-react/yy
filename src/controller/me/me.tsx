import React, { lazy } from "react";
import { InfraException } from "~/shared/CQRS/read/Exception/InfraException";
import { DomainDataException } from "~/shared/CQRS/read/Exception/DomainDataException";
import { DomainData } from "~/shared/CQRS/read/Data/DomainData";
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
