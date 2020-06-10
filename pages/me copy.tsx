import React from "react";
import type { ComponentProps } from "react";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { controller } from "~/app/controller/Me";
import { useReRender } from "~/app/presenter/hooks/common/useReRender";

type Props = ComponentProps<
  typeof import("~/app/presenter/components/Me")["Me"]
>;

const Presenter = dynamic<Props>(
  () => import("~/app/presenter/components/Me").then((_) => _.Me),
  { ssr: false }
);

const Page: NextPage = () => (
  // eslint-disable-next-line new-cap
  <Presenter Component={controller.Me({ ...useReRender(), id: 123 })} />
);

export default Page;
