## 参考
- https://www.youtube.com/watch?v=HyU3XL2F9GE
- https://www.youtube.com/watch?v=XfoYeWCzjac&list=PLavQwENTsEBUcTIz5H8ZL6QUs6ClMpV8K&index=1
- https://www.youtube.com/watch?v=ANoxy74O_VE&list=WL&index=7

## Pythonとは
- オブジェクト指向言語
- 人工知能、データ解析
- web開発
- 読みやすい、書きやすい(スクリプト言語)
- 動的型付け言語

## anacondaとは
- Pythonのディストリビューション(さまざまなライブラリが入っている)

### Jupyter Lab
- Jupyter(iPython notebook)をベースにしたインタラクティブなブラウザ上の開発環境である
- Jupyter notebookとの違い
	- JupyterLabは１つのタブの中でタブを切り分けてくれるのでChromeのタブが増えない
	- JupyterLabはデフォルトでマークダウン記法をサポートしており、編集している画面を右クリックすることでプレビュー画面を開ける
	- JupyterLabではセルの入れ替えがドラッグ&ドロップで可能
- CLIで以下のコマンドを実行して起動
```
jupyter lab
```
- .ipynb_checkpoints Jupyter labにおいて自動的に生成されるディレクトリで、Notebookの状態を記録する役割を持っている
- おすすめ設定
	- Auto Close Brackets 閉じタグ自動補完

## memo
- 配列はあらかじめ数が決まっていること、リストは決まっていないこと
- アトリビュート クラスプロパティ
- ファイルの右端の赤い丸を選択してブレークポイントを設定して処理を止めることができる  
	また、1行ずつ実行でき変数の中身を確認することができる
- Pandas データ解析を支援するライブラリ
- Launcher ソフトウエアをアイコンで表示したもの
- DataFrame 行と列でできた表形式
- Series 1列のリストのようなもの
- NumPy 高速にリストを計算するためのライブラリ
- ピボットテーブル Pythonのクロス集計表
- warnings warningを表示しないライブラリ

- ライブラリ
	- パッケージ
		- モジュール
			- クラス
			- メソッド
- selenium：ブラウザを使って値をコピー、クリック、URLへ飛ばす、入力ボックスに値を入れることができるライブラリ
- beautifulsoup：HTMLタグを読み込むことができるライブラリ
- ChromeDriver：Google Chromeを操作するために必要なソフトウェアでCLIで下記のコマンドによりインストール(Mac)
```
brew install --cask chromedriver
```
- time 経過時間を記録したらり、処理を一時停止できるライブラリ