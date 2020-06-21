import React from "react";
import type { NextPage } from "next";
import { repository } from "~/gateway/repository/me";
import { GatewayData } from "~/shared/typeGuard/Data";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Page: NextPage<any> = (p) => <>ok{p.foo}</>;

Page.getInitialProps = async () => {
  const res = await repository.fetchMe();
  if (res instanceof GatewayData) {
    return res.value;
  }
  return { foo: "ng" };
};

export default Page;
