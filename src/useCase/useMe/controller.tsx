import React, { lazy } from "react";
import type { ReactElement, LazyExoticComponent } from "react";
import { repository } from "~/infra/repo/me";
import { workFlow } from "~/domain/me";
import { InfraException } from "~/shared/CQRS/read/InfraException";
import { DomainDataException } from "~/shared/CQRS/read/DomainDataException";
import { DomainData } from "~/shared/CQRS/read/DomainData";

const useCase = {
  fetchInitValue: workFlow.query.fetchInitValue({ repository }),
  getEnv: () => ({ id: 123 }), // locationなど
};

type Create = () => LazyExoticComponent<() => ReactElement>;
export const create: Create = () =>
  lazy(() =>
    useCase
      .fetchInitValue(useCase.getEnv())
      .then(async (res) => {
        if (res instanceof DomainData) {
          const { Content } = await import("~/ui/components/Me/Content");
          const Component = () => <Content {...res.value} />;

          return { default: Component };
        }

        if (res instanceof InfraException) {
          const { Exception } = await import("~/ui/components/Me/Exception");
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
