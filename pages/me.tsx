import React from "react";
import type { ComponentProps } from "react";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { controller } from "~/controller/Me";
import { useReRender } from "~/presenter/hooks/common/useReRender";
import type { Me } from "~/presenter/components/Me";

const Presenter = dynamic<ComponentProps<typeof Me>>(
  () => import("~/presenter/components/Me").then((_) => _.Me),
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
