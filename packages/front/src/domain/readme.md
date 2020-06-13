## 概要

ビジネスロジックが置いています。ビジネスロジックとは、データを作るときにバリデートする。ような事です。  
class ベースではなく、HoF です。処理の流れをあらわしてください。

## 補足

ここのレイヤーの type には、`ReadonlyDeep`を付与しています。アプリ全体でほぼここで定義した type を使用します。  
つまり全体的に`readonly`です。

## 全体像

![-](https://yy-doc.netlify.app/madge/domain/graph.svg)
