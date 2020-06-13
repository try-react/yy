## 概要

React が頑張る世界です。  
ライブラリに依存すべきレイヤーではありませんが、SPA の特性上必須です。

- components
  - StatelessComponent です
  - 正常系の Component, 例外系 Component, 取得中 Component を準備しています。
- containers
  - 特殊な Component や TSX を配置しています。例えば Error ハンドリング用の Component です
- hooks
  - hooks を配置しています

## 全体像

![-](https://yy-doc.netlify.app/madge/presenter/graph.svg)
