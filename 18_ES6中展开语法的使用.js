const names = ["a", "b", "c"]
const myname = "wrj"

// 1.函数调用时使用展开运算符
function foo(x, y, z) {
    console.log(x, y, z);
}
// foo.apply(null, names)  //不建议使用这种调用方法
foo(...names)  //展开数组  a b c
foo(...myname)  //展开字符串  w r j



// 2.构建数组时使用展开运算符
const newNames = [...names, ...myname]
console.log(newNames);  //  [ 'a', 'b', 'c', 'w', 'r', 'j' ]


// 3.ES2018(ES9)  构建对象字面量时使用展开运算符
const info = { itname: "www", itage: "18" }
const obj = { ...info, itaddress: "浙江湖州安吉" }
console.log(obj);  //  { itname: 'www', itage: '18', itaddress: '浙江湖州安吉' }

// 补充: 展开运算符本质上是做一次浅拷贝  拷贝第一层的基本数据类型和引用