// tsc index.ts でコンパイル(node index.js で実行)

// (初期値があるのならば)冗長になるため型推論を使用する方が望ましい
let hasValue = true;
// let hasValue: boolean = true;
let count: number = 10;
let float: number = 3.14;
let negative: number = -0.12;
let single: string = 'hello';
let double: string = "hello";
let back: string = `hello`;
// 型注釈を使用する場合
let hello: string
hello = 'hello';

const person = {
	name: {
		first: 'Jack',
		last: 'Smith'
	},
	age: 21,
}

const fruits: string[] = ['apple', 'banana', 'grape'];
// tuple(複数のデータを一直線に並べたデータ)型
const book: [string, number, boolean] = ['business', 1, false];
// enum(複数の定数を一つのクラスとしてまとめておくことができる)型
enum CoffeeSize {
	SHORT = 'SHORT',
	TALL = 'TALL',
	GRANDE = 'GRANDE',
	VENTI = 'VENTI'
}
const coffee = {
	hot: true,
	size: CoffeeSize.SHORT
}

let anything: any = true;
anything = 'any';

let unionType: number | string = 10;
unionType = 'union';
let unionTypes: (number | string)[] = [21, 'union'];

// リテラル型(特定の値だけを代入可能にする型)
const apple: 'apple' = 'apple';
type ClothSize = 'small' | 'medium' | 'large';
let clothSize: ClothSize = 'small';
const cloth: {
	color: string,
	size: ClothSize
} = {
	color: 'white',
	size: 'medium'
}

function add(a: number, b: number): number {
	return a + b;
}

function seyHello(): void {
	console.log('Hello!');
}

const doubleNumber: (num: number) => number = num => num * 2;

function doubleAndHandle(num: number, cb: (num: number) => number): void {
	const doubleNum = cb(num * 2);
	console.log(doubleNum);
}
doubleAndHandle(21, doubleNum => {
	return doubleNum;
});

function error(message: string) {
	throw new Error(message);
}
// console.log(error('This is an error'));
