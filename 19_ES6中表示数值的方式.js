const num1 = 100  //  默认10进制

const num2 = 0b100  //  2进制

const num3 = 0o100  //  8进制

const num4 = 0x100  //  16进制

console.log(num1, num2, num3, num4);  //  10进制显式 => 100 4 64 256



// 大数值的链接符(ES2021 ES12)  便于阅读
const num = 10_000_000_000_000
console.log(num);  //  10000000000000