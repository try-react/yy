import React from "react";
import type { ComponentProps } from "react";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { create } from "~/controller/me";

type Props = ComponentProps<
  typeof import("~/ui/components/environment/Me")["Me"]
>;
const Me = dynamic<Props>(
  () => import("~/ui/components/environment/Me").then((_) => _.Me),
  { ssr: false }
);

const Page: NextPage = () => <Me Component={create()} />;

export default Page;
