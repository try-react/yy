import React from "react";
import type { ComponentProps } from "react";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { interactor } from "~/useCase/useMe";
import { repository } from "~/gateway/me";

type Props = ComponentProps<
  typeof import("~/presenter/components/ecosystem/Me")["Me"]
>;
const Presenter = dynamic<Props>(
  () => import("~/presenter/components/ecosystem/Me").then(({ Me }) => Me),
  { ssr: false }
);

const Page: NextPage = () => (
  <Presenter Component={interactor({ repository })} />
);

export default Page;
