## 参考
- https://www.youtube.com/watch?v=F9vzRz6jyRk&list=WL&index=5

## TypeScriptとは
- javaScriptにコンパイルされるJavaScriptの上位集合

## なぜTypeScript?
- Documentとしての側面(型を指定できる(JSは型が違っていてもエラーにならない))
- Linterとしての側面(ソースコードを検証できる)
- ES5のコンパイラとしての側面(指定して最新のJSにできる)

## コンパイル
- 自動コンパイル(watch mode)
```
tsc index.ts --watch 
```
control + c で解除

- 全てコンパイル(tsconfig.jsonファイル作成)
```
tsc --init
tsc
tsc -w
```