<?php
// 問題：https://algo-method.com/tasks/307

// n=品物の数, w=重さの上限
list($n, $w) = explode(' ', trim(fgets(STDIN)));

// それぞれの重さと価値(品物の数の最大が100)
$weight[110] = 0;
$value[110] = 0;
for ($i = 0; $i < $n; ++$i) {
    list($weight[$i], $value[$i]) = explode(' ', trim(fgets(STDIN)));
}
// DP初期条件(重さの最大が10000)
$dp[110][10010] = 0;
for ($j = 0; $j <= $w; ++$j) {
    $dp[0][$j] = 0;
}

for ($i = 0; $i < $n; ++$i) {
    for ($j = 0; $j <= $w; ++$j) {
        if ($j >= $weight[$i]) { // 選ぶ
            $dp[$i + 1][$j] = max($dp[$i][$j - $weight[$i]] + $value[$i],  $dp[$i][$j]);
        } else { // 選ばない
            $dp[$i + 1][$j] = $dp[$i][$j];
        }
    }
}

echo $dp[$n][$w];
