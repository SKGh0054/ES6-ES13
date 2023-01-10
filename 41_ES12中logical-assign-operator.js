// 1.逻辑或赋值运算 => ||= (逻辑OR赋值短路，意味着 x ||= y 相当于: x || (x = y) )
let message = undefined
message = message || "default value"
console.log(message);  // default value
message ||= "default value"
console.log(message);  // default value


// 2.逻辑与赋值运算 => &&=
// &&的使用
const obj = {
    names: "www",
    foo() {
        console.log("foo函数被调用了");
    }
}
obj.foo && obj.foo()  // foo函数被调用了

// &&=的使用
let info = { names: "why" }
// 1.判断info
// 2.有值的情况下，取出info.name
// info = info && info.names  // 等价于下面
info &&= info.names
console.log(info);  // why

// 3.逻辑空赋值运算 => ??=
// 与逻辑或( ||= )类似 但是可以正确判断出空字符串""与数字0
let message2 = null
message2 = message2 ?? "default value"
console.log(message2);  // default value
message2 ??= "default value"
console.log(message2);  // default value




// ES12(ES2021)新增String.replaceAll("匹配字符串","代替字符串") 可以替换匹配到的所有字符串
const bar = "aabbaabbaaccaannaammaammaaooo"
console.log(bar.replaceAll("aa","00"));  // 00bb00bb00cc00nn00mm00mm00ooo