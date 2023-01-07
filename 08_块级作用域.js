//ES6块级作用域
//对let-const-function-class声明的类型才有效

{
    let foo = "foo"
    function demo() { console.log("demo-function"); }
    class Person { }
}

console.log(foo);//ReferenceError: foo is not defined

demo()//demo-function(大部分浏览器为兼容，使函数声明没有块级作用域)

let P = new Person//ReferenceError: Person is not defined