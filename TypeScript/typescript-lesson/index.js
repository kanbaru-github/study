"use strict";
// tsc index.ts でコンパイル(node index.js で実行)
// (初期値があるのならば)冗長になるため型推論を使用する方が望ましい
let hasValue = true;
// let hasValue: boolean = true;
let count = 10;
let float = 3.14;
let negative = -0.12;
let single = 'hello';
let double = "hello";
let back = `hello`;
// 型注釈を使用する場合
let hello;
hello = 'hello';
const person = {
    name: {
        first: 'Jack',
        last: 'Smith'
    },
    age: 21,
};
const fruits = ['apple', 'banana', 'grape'];
// tuple(複数のデータを一直線に並べたデータ)型
const book = ['business', 1, false];
// enum(複数の定数を一つのクラスとしてまとめておくことができる)型
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize["SHORT"] = "SHORT";
    CoffeeSize["TALL"] = "TALL";
    CoffeeSize["GRANDE"] = "GRANDE";
    CoffeeSize["VENTI"] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
const coffee = {
    hot: true,
    size: CoffeeSize.SHORT
};
let anything = true;
anything = 'any';
let unionType = 10;
unionType = 'union';
let unionTypes = [21, 'union'];
// リテラル型(特定の値だけを代入可能にする型)
const apple = 'apple';
let clothSize = 'small';
const cloth = {
    color: 'white',
    size: 'medium'
};
function add(a, b) {
    return a + b;
}
function seyHello() {
    console.log('Hello!');
}
const doubleNumber = num => num * 2;
function doubleAndHandle(num, cb) {
    const doubleNum = cb(num * 2);
    console.log(doubleNum);
}
doubleAndHandle(21, doubleNum => {
    return doubleNum;
});
function error(message) {
    throw new Error(message);
}
// console.log(error('This is an error'));
