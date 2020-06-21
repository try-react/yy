import React from "react";
import type { NextPage } from "next";
import dynamic from "next/dynamic";

// eslint-disable-next-line @typescript-eslint/ban-types
const Me = dynamic<{}>(
  () => import("~/presenter/components/ecosystem/Me").then((_) => _.Me),
  { ssr: false }
);

const Page: NextPage = () => <Me />;
export default Page;
