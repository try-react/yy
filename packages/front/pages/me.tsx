import React from "react";
import type { ComponentProps } from "react";
import type { NextPage } from "next";
import type { Container as ContainerType } from "~/presenter/components/ecosystem/Me/Container";
import dynamic from "next/dynamic";
import { selector } from "~/presenter/components/ecosystem/Me/Container";
import { useReRender } from "~/presenter/hooks/useReRender";
import { interactor } from "~/useCase/me/interactor";
import { repository } from "~/gateway/repository/me";

// import { Container } from "~/presenter/components/ecosystem/Me";

const Container = dynamic<ComponentProps<typeof ContainerType>>(
  () => import("~/presenter/components/ecosystem/Me").then((_) => _.Container),
  { ssr: false }
);

const Page: NextPage = (x) => {
  console.log(x);
  return <Me />;
};

export default Page;

const Me = () => (
  <Container
    Content={selector({
      useCase: {
        ...interactor({ repository }),
        ...useReRender(),
      },
    })}
  />
);

Page.getInitialProps = () => Promise.resolve({ props: { x: "abc" } });
