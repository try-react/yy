import React from "react";
import type { NextPage } from "next";
import Link from "next/link";

const Component: NextPage = () => (
  <ul>
    <li>
      <Link href="/me" as="/me">
        <a>me</a>
      </Link>
    </li>
    <li>
      <Link href="/you/[id]" as="/you/123">
        <a>you/123</a>
      </Link>
    </li>
  </ul>
);

export default Component;
