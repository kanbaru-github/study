// tsc index.ts でコンパイル(node index.js で実行)
// (初期値があるのならば)冗長になるため型推論を使用する方が望ましい
var hasValue = true;
// let hasValue: boolean = true;
var count = 10;
var float = 3.14;
var negative = -0.12;
var single = 'hello';
var double = "hello";
var back = "hello";
// 型注釈を使用する場合
var hello;
hello = 'hello';
var person = {
    name: {
        first: 'Jack',
        last: 'Smith'
    },
    age: 21
};
var fruits = ['apple', 'banana', 'grape'];
// tuple(複数のデータを一直線に並べたデータ)型
var book = ['business', 1, false];
// enum(複数の定数を一つのクラスとしてまとめておくことができる)型
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize["SHORT"] = "SHORT";
    CoffeeSize["TALL"] = "TALL";
    CoffeeSize["GRANDE"] = "GRANDE";
    CoffeeSize["VENTI"] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
var coffee = {
    hot: true,
    size: CoffeeSize.SHORT
};
var anything = true;
anything = 'any';
var unionType = 10;
unionType = 'union';
var unionTypes = [21, 'union'];
// リテラル型(特定の値だけを代入可能にする型)
var apple = 'apple';
var clothSize = 'small';
var cloth = {
    color: 'white',
    size: 'medium'
};
function add(a, b) {
    return a + b;
}
function seyHello() {
    console.log('Hello!');
}
var doubleNumber = function (num) { return num * 2; };
function doubleAndHandle(num, cb) {
    var doubleNum = cb(num * 2);
    console.log(doubleNum);
}
doubleAndHandle(21, function (doubleNum) {
    return doubleNum;
});
function error(message) {
    throw new Error(message);
}
console.log(error('This is an error'));
