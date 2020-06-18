import React from "react";
import type { ComponentProps } from "react";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { selector } from "~/presenter/components/ecosystem/Me/selector";
import { useReRender } from "~/presenter/hooks/useReRender";
import type { Screen as ScreenType } from "~/presenter/components/ecosystem/Me/Screen";
import { interactor } from "~/useCase/me/interactor";
import { repository } from "~/gateway/repository/me";

const Screen = dynamic<ComponentProps<typeof ScreenType>>(
  () => import("~/presenter/components/ecosystem/Me").then((_) => _.Screen),
  { ssr: false }
);

const Page: NextPage = () => {
  const service = interactor({
    repository,
    ...useReRender(),
  });

  return <Screen Component={selector(service)} />;
};

export default Page;
