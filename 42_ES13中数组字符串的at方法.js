// ES13(ES2022)新增 String.at(整数)
// at()方法接受一个整数值，并返回一个由位于指定偏移量的单个UTF-16代码单元组成的新字符串
// 该方法允许正整数和负整数。负整数从最后一个字符串字符开始倒数
const arr = ["a", "b", "c", "d"]
const str = "hello world"

console.log(arr.at(1)); // b
console.log(arr.at(-1)); // d

console.log(str.at(1)); // e
console.log(str.at(-1)); // d