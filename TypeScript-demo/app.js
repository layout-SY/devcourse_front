function logName(name) {
    console.log(name);
}
logName('cho');
var student = {
    name: 'cho',
    age: 20,
    grade: function () {
        console.log('A');
    },
};
student.name = 'cho seung yeon';
student.age = 30;
//데이터 타입 명시
var stdId = 1111;
var stdName = 'lee';
var age = 20;
var gender = 'male';
var course = 'TypeScript';
var completed = false;
// 함수의 데이터 타입 명시(매개변수, 리턴타입)
function Plus(a, b) {
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
var MyStudent = /** @class */ (function () {
    function MyStudent() {
        this.stdId = 1234;
        this.stdName = 'lee';
        this.age = 20;
        this.gender = 'female';
        this.course = 'typescript';
        this.completed = true;
    }
    MyStudent.prototype.setName = function (name) {
        this.stdName = name;
        console.log(this.stdName);
    };
    return MyStudent;
}());
var myInstance = new MyStudent();
myInstance.setName('kim');
// console.log(getInfo(5678));
