<?php
// 問題：https://algo-method.com/tasks/307

$n = trim(fgets(STDIN));

// 最大個数(この問題だと10000だが余裕を持つ)
// $a[10010] = 10010;　これ必要？
// DPテーブル
$dp[10010] = 10010;

$tmp_arr = explode(' ', trim(fgets(STDIN)));
for ($i = 0; $i < $n; ++$i) {
    $a[$i] = $tmp_arr[$i];
}
// 初期値
$dp[0] = 0;

for ($i = 0; $i < $n; ++$i) {
    // 漸化式を用いて前項(現状の最適解)に$a[$i] を考慮して最適解を現在のDPテーブルに代入する
    $dp[$i + 1] = max($dp[$i], $dp[$i] + $a[$i]);
}
// 最後のDPテーブルの要素に全てのパターンを考慮した最適解がある
echo $dp[$n];
