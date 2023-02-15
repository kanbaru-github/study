## 参考
- https://www.youtube.com/watch?v=O037g3NOoXY&list=WL&index=3

## メモ
- 仮想環境への入り方
```
% source bin/activate
```

- vscodeターミナル立ち上げ
command + j

- 動作確認
manage.pyが存在するディレクトリで
```
% python manage.py runserver
```
表示されたURLにアクセス

- secret keyをGithubに公開しないように注意
参考：https://blog.kyanny.me/entry/2021/01/27/032342
git guardianからメールが届いた
管理していた箇所 microblog/microblog/setting.py

- push取り消し
```
// 直前のコミットを取り消す
git reset --hard HEAD^
// 強制的にPushする
git push -f origin main
```