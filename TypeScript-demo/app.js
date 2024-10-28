var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var numbers = [1, 2, 3, 4, 5];
var fruits = ['apple', 'banana', 'orange'];
for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
//배열의 유니온 타입
var mixedArray = [1, 'two', 3, 'four', 5];
for (var i = 0; i < mixedArray.length; i++) {
    console.log(mixedArray[i]);
}
var infer = [1, 2, 3]; //타입 추론
//읽기 전용
var readOnlyArray = [1, 2, 3];
//튜플 : 타입의 순서가 정해져 있음
var greeting = [1, 'hello', true];
for (var i = 0; i < greeting.length; i++) {
    console.log(greeting[i]);
}
//spread 연산자
var firstArray = [1, 2, 3];
var secondArray = [4, 5, 6];
__spreadArray(__spreadArray([], firstArray, true), secondArray, true).forEach(function (value) {
    console.log(value);
});
