import React from "react";
import type { ComponentProps } from "react";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { repository } from "~/gateway/me";
import { useMe } from "~/useCase/useMe";
import { workFlow } from "~/domain/me";
import { ComponentSelector } from "~/presenter/components/domain/Me/ComponentSelector";

type Props = ComponentProps<
  typeof import("~/presenter/components/domain/Me")["Me"]
>;

const Presenter = dynamic<Props>(
  () => import("~/presenter/components/domain/Me").then((_) => _.Me),
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

const Page: NextPage = () => (
  // eslint-disable-next-line new-cap
  <Presenter Component={ComponentSelector({ service, useMe })} />
);

export default Page;
