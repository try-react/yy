import React from "react";
import type { ComponentProps } from "react";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { create } from "~/controller/me";

type Props = ComponentProps<
  typeof import("~/presenter/components/ecosystem/Me")["Me"]
>;
const Presenter = dynamic<Props>(
  () => import("~/presenter/components/ecosystem/Me").then(({ Me }) => Me),
  { ssr: false }
);

const Page: NextPage = () => <Presenter Component={create()} />;

export default Page;
