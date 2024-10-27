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
	gender = 'female';
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
	gender: string;
	course: string;
	completed: boolean;
	// setName(name : string) : void;
	setName: (name: string) => void;
	// getName: () => string;
}

// console.log(getInfo(5678));
