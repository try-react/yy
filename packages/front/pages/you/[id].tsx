import React from "react";
import type { NextPage } from "next";

type InitData = { params: { id: string } };

const Page: NextPage<InitData> = ({ params }) => <>you-{params.id}</>;

/**
 * blogs/:id のようなページ向けの設定
 *
 * ブログのようなリアルタイム更新不要なページ
 * 各ページの`.html`を作りそれに流す
 */
// ---------------------------------
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
// ---------------------------------
