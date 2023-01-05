## 参考
- https://www.youtube.com/watch?v=F9vzRz6jyRk&list=WL&index=5

## TypeScriptとは
- javaScriptにコンパイルされるJavaScriptの上位集合

## なぜTypeScript?
- Documentとしての側面(型を指定できる(JSは型が違っていてもエラーにならない))
- Linterとしての側面(ソースコードを検証できる)
- ES5のコンパイラとしての側面(指定して最新のJSにできる)

## コンパイル
```
tsc
<!-- tscコマンドの後にファイルを指定することもできる -->
```
- 自動コンパイル(watch mode)
```
tsc --watch
<!-- tsc -wでも可能 -->
```
control + c で解除

- 全てコンパイル(tsconfig.jsonファイル作成)
```
tsc --init
tsc
tsc -w
```

- tsconfig.jsonのおすすめ設定
	- outDir コンパイル先を指定(デフォルトは同じディレクトリ)  
		念の為にrootDirも確認する(全てのtsファイルが入るように設定しないとエラーになる)
	- removeComments コメントを反映させない
	- noEmitOnError エラーが発生したらコンパイルしない  
		watchモードだと意味がない