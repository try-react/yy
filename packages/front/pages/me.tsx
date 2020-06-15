import React from "react";
import type { ComponentProps } from "react";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { selector } from "~/presenter/components/ecosystem/Me/selector";
import { useReRender } from "~/presenter/hooks/useReRender";
import type { Screen } from "~/presenter/components/ecosystem/Me/Screen";
import { interactor } from "~/useCase/me/interactor";
import { repository } from "~/gateway/repository/me";

const Presenter = dynamic<ComponentProps<typeof Screen>>(
  () => import("~/presenter/components/ecosystem/Me").then((_) => _.Screen),
  { ssr: false }
);

const Page: NextPage = () => {
  const service = interactor({
    repository,
    ...useReRender(),
  });

  return (
    <div>
      <div>
        <Presenter Component={selector(service)} />
      </div>
    </div>
  );
};
export default Page;
