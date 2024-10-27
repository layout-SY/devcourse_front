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
function getInfo(id) {
    return {
        stdId: id,
        stdName: 'lee',
        age: 20,
        gender: 'female',
        course: 'typescript',
        completed: true,
    };
}
console.log(getInfo(5678));
