function foo(m, n) {
    console.log(m, n);
}
// 普通调用函数的方式
foo("hello", "world")  //hello world

// 用标签模板字符串调用函数
foo`hello`  //[ 'hello' ] undefined

const myname = "wrj"
const myage = 18

foo`他和${myname}的年龄是${myage * 2}岁` //[ '他和', '的年龄是', '岁' ] wrj