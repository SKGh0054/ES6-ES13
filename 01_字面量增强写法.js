var myname = "wrj"
var myage = "18"
// 老写法
var myobj1 = {
    myname: myname,
    myage: myage
}
console.log(myname, myage);//wrj 18
// 字面量增强写法
var myobj2 = {
    myname,
    myage
}
console.log(myname, myage);//wrj 18

// ES6方法简写
var myobj3 = {
    foo: function () {
        console.log("老方法写法");
    },
    foo1() {
        console.log("ES6新方法写法");
    },
    //计算属性名
    [myname + 666]: "wrj666"
}
console.log(myobj3);//{ foo: [Function: foo], foo1: [Function: foo1], wrj666: 'wrj666' }