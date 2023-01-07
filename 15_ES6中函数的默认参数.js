// ES6之前函数给默认值
function foo(m, n) {
    m = m || "aaa";
    n = n || "bbb";
    console.log(m, n);
}
foo()  //aaa bbb

// ES6之后函数给默认值
function bar(m = "aa", n = "bb") {
    console.log(m, n);
}
bar()   //aa bb


// 对象参数给默认值及解构
function printjson({ name, age } = { name: "wrj", age: "18" }) {
    console.log(name, age);
}
printjson()  //wrj 18

// 另一种写法
function printjson1({ name = "WRJ", age = "188" } = {}) {
    console.log(name, age);
}
printjson1()  //WRJ 188


// 有默认值的函数的length属性会被改变
// 函数的length值是参数的个数
// 带有默认值的参数及该参数后的参数个数会被省略