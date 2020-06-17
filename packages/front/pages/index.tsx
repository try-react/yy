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
      <Link href="/foo/[abc]" as="/foo/123">
        <a>foo</a>
      </Link>
    </li>
  </ul>
);

export default Component;
