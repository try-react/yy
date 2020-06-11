## 概要

外の世界と通信する処理を配置します。gateway に渡す時は、例外が発生しないように`catch`してください。

```ts
fetch("path/").then(onFulfilled).catch(onRejected);
```

## 全体像

![-](https://yy-jscpd.netlify.app/madge/externalInterface/graph.svg)
