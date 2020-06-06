import React, { lazy } from "react";
import type { LazyExoticComponent } from "react";
import { repository } from "~/infra/repo/me";
import { workFlow } from "~/domain/me";
import { InfraException } from "~/shared/CQRS/read/Exception/InfraException";
import { DomainDataException } from "~/shared/CQRS/read/Exception/DomainDataException";
import { DomainData } from "~/shared/CQRS/read/Data/DomainData";

const useCase = {
  fetchInitValue: workFlow.fetchInitValue({ repository }),
  getEnv: () => ({ id: 123 }), // locationなど
};

type Create = () => LazyExoticComponent<React.FC>;
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
