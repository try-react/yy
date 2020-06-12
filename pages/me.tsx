import React from "react";
import type { ComponentProps } from "react";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { Selector } from "~/presenter/components/ecosystem/Me/Selector";
import { useReRender } from "~/presenter/hooks/useReRender";
import type { Me } from "~/presenter/components/ecosystem/Me";
import { interactor } from "~/useCase/me/interactor";
import { repository } from "~/gateway/repository/me";

const Presenter = dynamic<ComponentProps<typeof Me>>(
  () => import("~/presenter/components/ecosystem/Me").then((_) => _.Me),
  { ssr: false }
);

const Page: NextPage = () => {
  const props = interactor({
    repository,
    id: 123, // location から取得
    ...useReRender(),
  });

  // eslint-disable-next-line new-cap
  return <Presenter Component={Selector(props)} />;
};

export default Page;
