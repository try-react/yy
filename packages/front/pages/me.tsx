import React from "react";
import type { ComponentProps } from "react";
import type { NextPage } from "next";
import type { UseCase } from "~/presenter/components/ecosystem/Me/Container/selector";
import type { Container as ContainerType } from "~/presenter/components/ecosystem/Me/Container";
import dynamic from "next/dynamic";
import { selector } from "~/presenter/components/ecosystem/Me/Container";
import { useReRender } from "~/presenter/hooks/useReRender";
import { interactor } from "~/useCase/me/interactor";
import { repository } from "~/gateway/repository/me";

const Container = dynamic<ComponentProps<typeof ContainerType>>(
  () => import("~/presenter/components/ecosystem/Me").then((_) => _.Container),
  { ssr: false }
);

const Page: NextPage = () => {
  const useCase: UseCase = {
    ...interactor({ repository }),
    ...useReRender(),
  };
  return <Container Content={selector({ useCase })} />;
};

export default Page;
