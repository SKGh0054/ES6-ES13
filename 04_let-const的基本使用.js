const myname = "wrj";//值类型不可以修改
const myobj = { myname: "wrj" };//引用类型的地址不可修改，但是可以修改该地址下数据
myobj.myname = "www";
console.log(myobj.myname);//www

// 使用var声明变量可以多次声明
var aaa = "a";
var aaa = "aa";
console.log(aaa);//aa

// 使用let与const声明变量不可以多次声明
let bbb = "b";
//多次声明报错 SyntaxError: Identifier 'bbb' has already been declared
const ccc = "c";
