// ES8(ES2017)新增
//函数创建和调用时的参数可以在结尾加个逗号
function foo(n, m,) {
    console.log(n, m);  // 10 20
}
foo(10, 20,)