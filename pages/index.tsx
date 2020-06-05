import React from "react";
import type { NextPage } from "next";
import Link from "next/link";

const Component: NextPage = () => (
  <Link href="/me">
    <a>Lazy & Suspenseへ 1</a>
  </Link>
);

export default Component;
