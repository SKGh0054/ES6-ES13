function foo() {

}
console.log(foo.prototype);  //普通函数的显式原型  {}
const f = new foo()
f.prototype = foo.prototype


var bar = () => {
    console.log(this);  //箭头函数中没有this 需要去上层作用域中寻找this
    console.log(arguments);  //箭头函数中没有arguments 需要去上层作用域中寻找arguments
}
console.log(bar.prototype);  //箭头函数没有显式原型  undefined