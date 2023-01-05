"use strict";
let hasValue = true;
let count = 10;
let float = 3.14;
let negative = -0.12;
let single = 'hello';
let double = "hello";
let back = `hello`;
let hello;
hello = 'hello';
false;
;
const person = {
    name: {
        first: 'Jack',
        last: 'Smith'
    },
    age: 21,
};
const fruits = ['apple', 'banana', 'grape'];
const book = ['business', 1, false];
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
