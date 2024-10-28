function logName(name: string) {
	console.log(name);
}

logName('cho');

let student = {
	name: 'cho',
	age: 20,
	grade: function () {
		console.log('A');
	},
};

student.name = 'cho seung yeon';
student.age = 30;

//데이터 타입 명시
let stdId: number = 1111;
let stdName: string = 'lee';
let age: number = 20;
let gender: string = 'male';
let course: string = 'TypeScript';
let completed: boolean = false;

// 함수의 데이터 타입 명시(매개변수, 리턴타입)
function Plus(a: number, b?: number): void {
	// void는 리턴문이 없는 함수
	//return a + b;
}

// 리턴 타입 개별 정의
// function getInfo(id: number): {
// 	stdId: number;
// 	stdName: string;
// 	age: number;
// 	gender: string;
// 	course: string;
// 	completed: boolean;
// } {
// 	return {};
// }
// function getInfo(id: number): Student {
// 	return {
// 		stdId: id,
// 		stdName: 'lee',
// 		age: 20,
// 		gender: 'female',
// 		course: 'typescript',
// 		completed: true,
// 	};
// }

// function setInfo(student: Student): void {
// 	student;
// }

class MyStudent implements Student {
	stdId = 1234;
	stdName = 'lee';
	age = 20;
	gender = ;
	course = 'typescript';
	completed = true;

	setName(name: string): void {
		this.stdName = name;
		console.log(this.stdName);
	}
}

const myInstance = new MyStudent();
myInstance.setName('kim');

interface Student {
	stdId: number;
	stdName: string;
	age?: number; // 선택적 프로퍼티(옵셔널 기호), 해당 인자에 대한 매개변수가 전달 안되도 문제가 발생하지 않음.
	gender?: 'male' | 'female';
	course: string;
	completed: boolean;
	// setName(name : string) : void;
	setName: (name: string) => void;
	// getName: () => string;
}

//열거형 : 사용자 정의 타입
enum GenderType {
	Male,
	Female,
}

const user: { name: string; age: number } = {
	name: 'john',
	age: 25,
};

let anyVal: any = 100;
anyVal = 200; // 'kim'; true; 어떤 타입이든 들어감

//타입 정의
type strOrNum = number | string; // number or string이라는 타입을 strOrNum이라는 이름으로 정의

let numStr: strOrNum = 100;
// let numStr : number | string = 100;

let item : number;

function converToString(val: number | string): string {
	//numStr은 두 개의 타입이 동시에 가능하기에 item에 숫자 외에 다른 타입이 적용될 수 있으므로 에러 발생
	//item = numStr; 

	if(typeof val === 'string'){
		item = 0
	}else{
		item = val;
	}

	return String(val);
}

function converToNumber(val: number | string): number {
	return Number(100);
}

console.log(converToString(numStr));
console.log(converToNumber(numStr));

// console.log(getInfo(5678));
