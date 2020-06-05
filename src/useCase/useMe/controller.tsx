import React, { lazy } from "react";
import type { ReactElement, LazyExoticComponent } from "react";
import { repository } from "~/infra/repo/me";
import { workFlow } from "~/domain/me";
import { InfraException } from "~/shared/exception/InfraException";
import { InitData } from "~/shared/data/read/InitData";

const useCase = {
  fetchInitValue: workFlow.fetchInitValue({ repository }),
};
const getEnv = () => ({ id: 123 }); // locationなど

type Create = () => LazyExoticComponent<() => ReactElement>;
export const create: Create = () =>
  lazy(() =>
    useCase
      .fetchInitValue(getEnv())
      .then(async (res) => {
        if (res instanceof InitData) {
          const { Content } = await import("~/ui/components/Me/Content");
          const Component = () => <Content {...res.value} />;

          return { default: Component };
        }

        if (res instanceof InfraException) {
          const { Exception } = await import("~/ui/components/Me/Exception");
          const Component = () => <Exception />;

          return { default: Component };
        }
        return Promise.reject();
      })
      .catch<never>((e) => e)
  );
