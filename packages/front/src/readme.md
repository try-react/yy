## コードの方針

必須項目ではないです。迷ったらこれにしてください。

### 引数は分解しない

TS なので、object でもしっかり補完があるので分解しない

```ts
type Props = {
  foo: string;
  bar: number;
};

// 良い
const List: FC<Props> = props => <>省略</>;

// 悪い
const List: FC<Props> = ({ foo, bar }) => <>省略</>;
```

### 引数はまとめる

リファクタリングが辛くなるので、**なるべく**まとめる

```ts
type User = {
  id: number;
  name: string;
  age: number;
};
type Fn = (p: User) => any;

// 良い
const fn: Fn = user => {};

// 悪い
const fn: Fn = (id, name, age) => {};
```
