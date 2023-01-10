const foo = {
    names: "www",
    age: 18,
    __proto__: {
        address: "浙江"
    }
}


console.log(foo.names, foo.age);  // www 18
// address属性在原型上
console.log(foo.address);  // 浙江


// ES13之前判断是否有自己属性
console.log(foo.hasOwnProperty("names"));  // true
console.log(foo.hasOwnProperty("address"));  // false


// ES13(ES2022)新增 Object.hasOwn(object对象,属性名)用于判断是否有自己的属性 替代老方法
console.log(Object.hasOwn(foo, "names"));  // true
console.log(Object.hasOwn(foo, "address"));  // false

// 如果指定的对象将指定的属性作为自己的属性，则Object.hasOwn()静态方法返回true
// 如果该属性是继承的，或者不存在，则该方法返回false
// 建议使用它而不是object.prototype.hasOwnProperty()
// 因为它适用于使用Object.create(null)创建的对象以及已重写继承的hasOwnProperty()方法的对象
// 虽然可以通过在外部对象上调用object.prototype.hasownproperty()来解决这些问题，但Object.hasOwn()更直观

// 2.和hasOwnProperty的区别二
const info = Object.create(null)  // 创建一个对象info指向该对象，该对象的隐式原型指向null
info.name = "why"
console.log(info);  // [Object: null prototype] { name: 'why' }
// 该对象的隐式原型指向null后该对象的原型上就不存在hasOwnProperty方法
console.log(info.hasOwnProperty("name"))  // TypeError: info.hasOwnProperty is not a function
