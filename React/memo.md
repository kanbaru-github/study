## 参考
- https://www.youtube.com/watch?v=XKSYF2aZnkQ&list=RDCMUC-bOAxx-YOsviSmqh8COR0w&start_radio=1&rv=XKSYF2aZnkQ&t=75
- https://ja.reactjs.org/
- https://qiita.com/kyosuke5_20/items/c5f68fc9d89b84c0df09

## Reactとは
UIを作ることに特化したJavaScriptライブラリ

## メリット
- ブラウザのDOMツリーをJavaScriptのオブジェクトとして扱い、ブラウザに負荷をかけずJavaScriptエンジンのメモリを使用する  
	効率の良い再描画(レンダリング)ができる  
	差分のみをレンダリング

## memo
- JSX JavaScriptの拡張言語(HTML+JavaScriptのような記述)  
	JSX=>React.createElementの記述にコンパイルされる  
	最上位コンポーネントは並列にできない(何かで囲む必要がある)