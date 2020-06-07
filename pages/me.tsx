import React from "react";
import type { ComponentProps } from "react";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { repository } from "~/gateway/me";
import { Me } from "~/presenter/components/environment/Me";

type Props = ComponentProps<
  typeof import("~/presenter/components/ecosystem/Me")["Me"]
>;
const Presenter = dynamic<Props>(
  () => import("~/presenter/components/ecosystem/Me").then((_) => _.Me),
  { ssr: false }
);

// location などから取得
const getParam = () => ({ id: 123 });
const Page: NextPage = () => (
  // eslint-disable-next-line new-cap
  <Presenter Component={Me({ repository, payload: getParam() })} />
);

export default Page;
