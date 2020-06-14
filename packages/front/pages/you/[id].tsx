import React from "react";
import type { NextPage } from "next";

const Page: NextPage<InitData> = ({ params }) => <>you-{params.id}</>;

type GetStaticProps = (initData: InitData) => { props: unknown };
export const getStaticProps: GetStaticProps = ({ params }) => {
  return { props: { params } };
};

type GetStaticPaths = () => {
  paths: InitData[];
  fallback: false;
};
export const getStaticPaths: GetStaticPaths = () => ({
  paths: [{ params: { id: "456" } }, { params: { id: "789" } }],
  fallback: false,
});

export default Page;

type InitData = { params: { id: string } };
