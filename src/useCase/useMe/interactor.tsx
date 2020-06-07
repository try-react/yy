import React, { lazy } from "react";
import {
  InfraException,
  DomainDataException,
} from "~/shared/typeGuard/read/Exception";
import { DomainData } from "~/shared/typeGuard/read/Data";
import type { LazyExoticComponent, FC } from "react";
import { workFlow } from "~/domain/me";
import { Repository } from "~/domain/me/type";
import type { UseMe } from "./type";

type Interactor = (p: {
  repository: Repository;
  useMe: UseMe;
}) => LazyExoticComponent<FC>;

export const interactor: Interactor = ({ repository, useMe }) =>
  lazy(() => {
    // useMeに渡す？
    const service = workFlow.fetchInitValue({ repository });

    // location などから取得
    const getParam = () => ({ id: 123 });

    return service(getParam())
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
      .catch<never>((e) => e);
  });
