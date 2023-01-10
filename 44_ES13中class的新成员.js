class Person {
    // 一、实例属性
    // 对象属性：public 公共
    height = 188
    // 对象属性：private 私有  程序员之间约定熟成 外部还是可以访问
    _intro = "name is www"
    // ES13(ES2022)新增 真正的私有属性 以#开头的属性名
    #intro2 = "name is wwwwww"

    // 二、类属性(static)
    // 类属性：public 公共
    static totalCount = "70亿"
    // 类属性：private 私有
    static #maleTotalCount = "10亿"


    constructor(name, age) {
        //对象中的属性：在constructor通过this进行设置
        this.name = name
        this.age = age
        this.message = "浙江"
    }


    // 三、静态代码块 在加载类的时候会执行静态代码块 且只会执行一次
    static{
        console.log("hello");  // hello
        console.log("world");  // world
    }
}
const p = new Person("www", 18)
console.log(p);  // Person { height: 188, name: 'www', age: 18, message: '浙江' }
console.log(p.age, p.name, p.message, p.height);  // 18 www 浙江 188

console.log(p._intro);  // name is www
// console.log(p.#intro2);  // SyntaxError: Private field '#intro2' must be declared in an enclosing class

console.log(Person.totalCount);  // 70亿
// console.log(Person.#maleTotalCount);  // SyntaxError: Private field '#maleTotalCount' must be declared in an enclosing class