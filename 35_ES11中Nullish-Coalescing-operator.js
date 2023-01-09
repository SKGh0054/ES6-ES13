// 空值合并运算 ??
let foo = undefined
console.log(foo);  // undefined

// let bar = foo || "我是默认值"  // 对于0与""无法判断
let bar = foo ?? "我才是默认值"  // 可以正确判断0与""
console.log(bar);