/**
 * # Dynamic Routes と SSGの関係
 *
 * ## 更新頻度が低めなサービス
 * 相性が良い
 * `getStaticPaths`と`getStaticProps`の組み合わせで、事前にページを生成できるため
 *
 * article/:id このURLのid分取得して事前ビルドする為
 *
 * ---
 *
 * ## Task管理のようなサービス
 * 相性が悪い
 * task/:id タスク追加の度に、ページを生成する必要がある為
 *
 * タスク追加ボタンクリック -> DB登録 -> ページ生成 -> 配信
 * の流れになるはず。
 *
 * ---
 *
 * ## 上記の複合パターン
 * redirects設定で頑張る
 */

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

type GetStaticProps = () => { props: unknown };
export const getStaticProps: GetStaticProps = () => ({
  // useRouterするので不要
  props: {},
});

type GetStaticPaths = () => {
  paths: [{ params: { id: string } }];
  fallback: false;
};
export const getStaticPaths: GetStaticPaths = () => ({
  paths: [{ params: { id: "123" } }],
  fallback: false,
});

export default Page;
