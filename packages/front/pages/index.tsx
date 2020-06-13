import React from "react";
import type { NextPage } from "next";
import Link from "next/link";

const Component: NextPage = () => (
  <Link href="/me/[id]" as="/me/123">
    <a>me</a>
  </Link>
);

export default Component;
