import React from "react";
import type { ComponentProps } from "react";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { controller } from "~/app/controller/Me";
import { useReRender } from "~/app/presenter/hooks/common/useReRender";
import type { Me } from "~/app/presenter/components/Me";

const Presenter = dynamic<ComponentProps<typeof Me>>(
  () => import("~/app/presenter/components/Me").then((_) => _.Me),
  { ssr: false }
);

const Page: NextPage = () => (
  <>
    <h1>Me ページ</h1>
    {/* eslint-disable-next-line new-cap */}
    <Presenter Component={controller.Me({ ...useReRender(), id: 123 })} />
  </>
);

export default Page;
