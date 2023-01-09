const obj = { name: "obj1" }

// 1.区别一: 不可以使用基本数据类型
// weakMap.set(1, "ccc")  // ReferenceError: weakMap is not defined 

// 2. weakMap和Map的区别二: WeakMap中的键值对为弱引用
const map = new Map()
map.set(obj, "aaa")

const weakMap = new WeakMap()
weakMap.set(obj, "aaa")


// 3.常见方法
// get()方法
console.log(weakMap.get(obj))  // aaa
// has()方法
console.log(weakMap.has(obj))  // true
// delete()方法
console.log(weakMap.delete(obj))  // true

// 因为WeakMap是无法遍历的所以无法打印输出字符串
console.log(weakMap);  // WeakMap { <items unknown> }