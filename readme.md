# React アプリ

## 概要

CleanArchitecture の構成に寄せています。特に意識している点は下記の通りです。

### domain について

- 依存するのは、shared/と他の domain/以外に依存しない
- ライブラリの依存を控える

### データの永続化や取得

- domain の repository や、gateway で抽象化する

### データの種類について

- どこで作られたデータかをわかりやすくする
- 正常系, 想定内のエラー(Exception), 想定外のエラー(Error)を考慮する。

### その他

- ディレクトリ名は、だいたい単数で、小文字

### ディレクトリ構成

- 非 SSR での動作を想定しています。

### pages/

- Next.js の`pages`です。
- src/pages/でも OK だが、単体テスト対象外なので、page/に配置しています。
- SSR しない想定で実装しています。
- CleanArchitecture で言う所の、UI や Web

![-](./doc/madge/pages/graph.svg)

---

### src/presenter/

- React の Component
- AtomicComponent によせています。

![-](./doc/madge/presenter/graph.svg)

#### components/

- Stateless Component の置き場です。
- 正常系の Component, 例外系 Component, 取得中の Component を準備しています。

```bash
-  components
└──  Me
   ├──  Content.tsx # 正常系
   ├──  Exception.tsx # 例外系
   ├──  index.ts # 利用して欲しいComponentのみ`export`
   └──  Me.tsx # 取得中
```

#### containers/

- 特殊な TSX を配置しています。例えば Error ハンドリング用の Component です。

---

### src/useCase/

- CustomHooks 置き場
- interactor 置き場

![-](./doc/madge/useCase/graph.svg)

---

### src/domain/

- class ベースではなく、関数ベースで実装いています。処理の流れを意識しています。
- `type WorkFlow`は、`query`や`write`をトップレベルのキーとして持ちます。
- repository をもらい、repository 用のパラメタをもらい、実行結果を返す。ような流れの型です。

![-](./doc/madge/domain/graph.svg)

---

#### src/gateway/

- src/domain/の`type Repository`の実装です。

![-](./doc/madge/gateway/graph.svg)

#### src/externalInterface/

- src/gateway/からよばれます。

## ![-](./doc/madge/externalInterface/graph.svg)

### src/shared/

- 全レイヤーで使用する処理を置いています。

## データの流れと TypeGuard

データは、class にいれて受け渡します。ただの箱として扱い、出し入れ用のメソッドしかありません。

```ts
InfraData.of({ id: 123, name: `tommy`, type: human });
```

```ts
class InfraData<T> {
  private constructor(private _value: T) {}

  get value(): T {
    return { ...this._value };
  }

  static of<V>(v: V): InfraData<V> {
    return new InfraData(v);
  }
}
```

利点は、TypeGuard を利用して正常系か、例外系かのデータが判断しやすいためです。

```ts
const obj = { isErr: false, data: "ok" };
if (!obj.isErr) {
  // 正常系データ
}
```

`isErr`などを付与せずに済ます。

```ts
const obj = InfraData.of({ data: "ok" });
if (obj instanceof InfraData) {
  // 正常系データ
}
```

## 用語の整理

- Domain の WorkFlow  
  処理の流れを書いています。validate して save などです。

- Domain の Repository  
  Domain からみて扱いやすいデータの集合です。CRUD に準拠するメソッドがはえています。実装はありません。
  保存先や取得先の隠蔽がメリットです。  
  オンメモリのような感じで扱える事を目的としています。  
  粒度は、整合性の単位です。(DB で言う所の、トランザクション相当)

- gateway
  Domain の Repository 向けの実装です。しかしここに処理を書くよりは、更に先に書いてそれを利用します。

- Entity  
  id が同一であれば、同じとみなす object です。

- ValueObject  
  deepEqual で同じなら、同じとみなす object です。

## State

### State の種類

- ui  
  トグルの開閉、モーダルの切り替え

- app  
  ローディング中  
  ログイン者

- domain  
  domain 特有のステート  
  ユーザ情報や、商品情報

- operations  
  `state`操作する際に、`dispatch`を実行するがそれの隠蔽。  
  複数の dispatch を束ねても良い

- selectors  
  計算が必要な値`is` `has` `can` のような prefix がつく  
  domain の state に応じて生成される場合が多い

### State の操作

- Action  
  Action は起こったイベントを表す

- Reducer
  Action と前の state から次の state を生成する
  再利用 OK むしろ推奨 HOF で再利用も OK

- State  
  State は JSON serializable なインターフェース（クラスや関数がない、オブジェクトや配列は OK）で、プログラムの状態を表す  
  [これ](https://stackoverflow.com/questions/122102/what-is-the-most-efficient-way-to-deep-clone-an-object-in-javascript/122704#122704)で壊れないデータにしてね

```js
JSON.parse(JSON.stringify(obj));
```

## DDD と Clean Architecture のマッチング

- src/domain/type/の`Repository`  
  Clean Architecture で言う gateways

- src/domain  
  Entities

![-](./doc/img/CleanArchitecture.png)

## データ取得までの流れ

![-](./doc/img/CleanArchitecture3.png)
