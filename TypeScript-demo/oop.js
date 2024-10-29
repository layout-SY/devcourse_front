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
var Employee = /** @class */ (function () {
    // private _empName: string;
    // private _age: number;
    // private _empJob: string;
    function Employee(_empName, _age, _empJob) {
        var _this = this;
        this._empName = _empName;
        this._age = _age;
        this._empJob = _empJob;
        this.printEmp = function () {
            console.log("".concat(_this._empName, "\uC758 \uB098\uC774\uB294 ").concat(_this._age, ", \uC9C1\uC5C5\uC740 ").concat(_this._empJob));
        };
        // //선택적 옵셔널은 매개변수에도 사용가능 하지만 해당 매개변수 이후로 오는 매개변수들이 똑같이
        // //선택적 옵셔널이 되어야 함.(즉, age를 그렇게 하면 empJob도 그렇게 해야함.)
        // this._empName = empName;
        // this._age = age;
        // this._empJob = empJob;
    }
    Object.defineProperty(Employee.prototype, "empName", {
        get: function () {
            return this._empName;
        },
        set: function (name) {
            this._empName = name;
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
var emp = new Employee('정과장', 40, '무역');
emp.printEmp();
// emp.empName = '정과장'; //private으로 접근지정자 설정했으니 못씀
