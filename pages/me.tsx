import React from "react";
import type { ComponentProps } from "react";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { interactor, useMe } from "~/useCase/useMe"; // useCaseと接するのは、しょうがない
import { repository } from "~/gateway/me";

type Props = ComponentProps<
  typeof import("~/presenter/components/ecosystem/Me")["Me"]
>;
const Presenter = dynamic<Props>(
  () => import("~/presenter/components/ecosystem/Me").then(({ Me }) => Me),
  { ssr: false }
);

// location などから取得
const getParam = () => ({ id: 123 });
const Page: NextPage = () => (
  <Presenter
    Component={interactor({ repository, useMe, envParam: getParam() })}
  />
);

export default Page;
