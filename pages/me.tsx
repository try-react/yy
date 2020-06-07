import React from "react";
import type { ComponentProps } from "react";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { repository } from "~/gateway/me";
import { interactor, useMe } from "~/useCase/useMe";
import { workFlow } from "~/domain/me";

// -------------------------------------------
type Props = ComponentProps<
  typeof import("~/presenter/components/ecosystem/Me")["Me"]
>;

const Presenter = dynamic<Props>(
  () => import("~/presenter/components/ecosystem/Me").then((_) => _.Me),
  { ssr: false }
);

// location などから取得
const getParam = () => ({ id: 123 });
const service = {
  fetch: workFlow.getLatestInformationAboutMe({
    repository,
    payload: getParam(),
  }),
};
// -------------------------------------------

const Page: NextPage = () => {
  return <Presenter Component={interactor({ service, useMe })} />;
};

export default Page;
