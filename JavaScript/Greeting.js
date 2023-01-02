// https://www.youtube.com/watch?v=gs0l4rsQCGM&list=WL&index=8
// node Greeting.jsで実行
console.log('Good Morning');

/** @var int 変数定義 */
let val = 'キノコード';
console.log(val);
console.log(typeof(val));

let arr = new Array('apple', 'banana', 'orange');
console.log(arr);

let age = 24;
if (age >= 10 && age < 20) {
	console.log('未成年');
} else {
	console.log('成人');
}

for (i = 0; i <= 10; i++) {
	if (i == 3) {
		continue;
	} else if (i == 7) {
		break;
	} else {
		console.log(i);
	}
}

/**
 * 関数式
 * @param {int} a 
 * @param {int} b 
 * @param {int} c
 * @returns 
 */
function cal(a, b, c) {
	return a + b + c;
}
let result = cal(10, 5, 8);
console.log(result);
/**
 * 生徒管理クラス
 */
class Student {
	constructor(name) {
		this.name = name;
	}

	/**
	 * 平均点を計算
	 * @param {array} point_arr 
	 * @return int
	 */
	avg(point_arr) {
		let sum = 0;
		point_arr.forEach(function(point) {
			sum += point;
		});
		return sum / point_arr.length;
	}

	/**
	 * 合否判定
	 * @param {int} point 
	 * @returns 
	 */
	judge(point) {
		if (point >= 60) {
			return 'passed';
		} else {
			return 'failed';
		}
	}
}

let student_name = 'kanbaru';
let student = new Student(student_name);
/** @var array 得点 */
let get_point = [70, 65, 50, 90, 30];
let average = student.avg(get_point);
console.log(average);
let judge = student.judge(average);
console.log(judge);