import React from "react";
import type { NextPage } from "next";
import Link from "next/link";

const Page: NextPage = () => (
  <ul>
    <li>
      <Link href="/me">
        <a>me</a>
      </Link>
    </li>
  </ul>
);

export default Page;
