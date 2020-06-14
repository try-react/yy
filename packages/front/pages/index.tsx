import React from "react";
import type { NextPage } from "next";
import Link from "next/link";

const Component: NextPage = () => (
  <ul>
    <li>
      <Link href="/me/123">
        <a>me</a>
      </Link>
    </li>
    <li>
      <Link href="/you/456">
        <a>you</a>
      </Link>
    </li>
  </ul>
);

export default Component;