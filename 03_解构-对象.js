var obj = {
    myname: "张三",
    age: "18",
    height: "188cm"
}

// 对象解构
var { age, myname, height } = obj
console.log(myname, age, height);//张三 18 188cm

var { age } = obj
console.log(age);//18

// 对象解构-改名
var { age: newage, myname: newmyname, height: newheight } = obj
console.log(newmyname, newage, newheight);//张三 18 188cm

// 对象解构-改名+更改默认值(未更改为undefined)
var { address: newaddress = "浙江省湖州市安吉县" } = obj
console.log(newaddress);//浙江省湖州市安吉县

//函数常用
function foo(info) {//普通写法
    console.log(info.myname, info.age, info.height);//张三 18 188cm
}
foo(obj)

function foo1({ myname, age, height }) {//直接解构写法
    console.log(myname, age, height);//张三 18 188cm
}
foo1(obj)