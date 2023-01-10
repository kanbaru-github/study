## 参考
- https://www.youtube.com/watch?v=XKSYF2aZnkQ&list=RDCMUC-bOAxx-YOsviSmqh8COR0w&start_radio=1&rv=XKSYF2aZnkQ&t=75
	- source code: https://github.com/deatiger/react-basic-new
- https://ja.reactjs.org/
- https://qiita.com/kyosuke5_20/items/c5f68fc9d89b84c0df09

## Reactとは
UIを作ることに特化したJavaScriptライブラリ

## Next.jsとの違い
- Reactをベースに開発された、フロントエンドフレームワーク
- Reactはライブラリのため、WEBアプリケーションを作成するためにサーバーを必要とするが、Next.jsではサーバーも用意してくれるため、サーバーの有無がReactとの大きな違いである

## メリット
- ブラウザのDOMツリーをJavaScriptのオブジェクトとして扱い、ブラウザに負荷をかけずJavaScriptエンジンのメモリを使用する  
	効率の良い再描画(レンダリング)ができる  
	差分のみをレンダリング

## memo
- JSX JavaScriptの拡張言語(HTML+JavaScriptのような記述)  
	JSX=>React.createElementの記述にコンパイルされる  
	最上位コンポーネントは並列にできない(何かで囲む必要がある)
- Hooks 関数コンポーネントに state やライフサイクルといった React の機能を “接続する (hook into)” ための関数
	- props 引数のようにコンポーネントに渡される値
	- state コンポーネント内で制御されるもの
- ライフサイクル コンポーネントが生まれてから破棄されるまでの時間の流れ
	- Mounting 生まれる
	- Updating 成長する
	- Unmounting 死ぬ
- effect レンダリングによって引き起こされる処理

## Vueと比べて
### Vue
- 業務システム,小規模
### React 
- 大規模,見た目重視
- TypeScriptとの相性が良い
- JSXが使える(JavaScriptの中でHTMLが使用できる)
