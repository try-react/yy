import React from "react";
import type { ComponentProps } from "react";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { repository } from "~/gateway/me";
import { controller } from "~/controller/me";

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
  <Presenter Component={controller({ repository, envParam: getParam() })} />
);

export default Page;
