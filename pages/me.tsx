import React from "react";
import type { ComponentProps } from "react";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { me } from "~/controller/me/me";
import { useReRender } from "~/presenter/hooks/useReRender";

type Props = ComponentProps<
  typeof import("~/presenter/components/ecosystem/Me")["Me"]
>;

const Presenter = dynamic<Props>(
  () => import("~/presenter/components/ecosystem/Me").then((_) => _.Me),
  { ssr: false }
);

const Page: NextPage = () => (
  // eslint-disable-next-line new-cap
  <Presenter Component={me({ ...useReRender() })} />
);

export default Page;
