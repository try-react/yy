import React from "react";
import type { ComponentProps } from "react";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { Selector } from "~/presenter/components/ecosystem/Me/Selector";
import { useReRender } from "~/presenter/hooks/useReRender";
import type { Screen } from "~/presenter/components/ecosystem/Me/Screen";
import { interactor } from "~/useCase/me/interactor";
import { repository } from "~/gateway/repository/me";
import { useRouter } from "next/router";

const Presenter = dynamic<ComponentProps<typeof Screen>>(
  () => import("~/presenter/components/ecosystem/Me").then((_) => _.Screen),
  { ssr: false }
);

const Page: NextPage = () => {
  const service = interactor({
    repository,
    id: Number(useRouter().query.id),
    ...useReRender(),
  });

  // eslint-disable-next-line new-cap
  return <Presenter Component={Selector(service)} />;
};

export const getStaticProps = () => ({
  // useRouterするので不要
  props: {},
});

export const getStaticPaths = () => ({
  paths: [{ params: { id: "123" } }],
  fallback: false,
});

export default Page;
