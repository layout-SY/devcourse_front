// //일반적인 직원 정보
// let empName: string;
// let age: number;
// let empJob: string;

// function printEmp(empName: string, age: number, empJob: string): void {
// 	console.log(`${empName}의 나이는 ${age}, 직업은 ${empJob}`);
// }

// printEmp('정과장', 40, '무역');

//맴버 변수 == 속성 == 프로퍼티
//멤버 함수 == 메서드

class Employee {
	// private _empName: string;
	// private _age: number;
	// private _empJob: string;

	constructor(private _empName: string, private _age: number, private _empJob?: string) {
		// //선택적 옵셔널은 매개변수에도 사용가능 하지만 해당 매개변수 이후로 오는 매개변수들이 똑같이
		// //선택적 옵셔널이 되어야 함.(즉, age를 그렇게 하면 empJob도 그렇게 해야함.)
		// this._empName = empName;
		// this._age = age;
		// this._empJob = empJob;
	}

	get empName() {
		return this._empName;
	}

	set empName(name: string) {
		this._empName = name;
	}

	printEmp = (): void => {
		console.log(`${this._empName}의 나이는 ${this._age}, 직업은 ${this._empJob}`);
	};
}

let emp = new Employee('정과장', 40, '무역');

emp.printEmp();
// emp.empName = '정과장'; //private으로 접근지정자 설정했으니 못씀
