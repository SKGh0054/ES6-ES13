// ES6之前的对象的属性名  底层都是以字符串形式存储
const foo = {
    myname: "wrj",
    friends: { itname: "www" },
    age: 18
}
console.log(Object.keys(foo));  //  [ 'myname', 'friends', 'age' ]

// 如果添加了新的key容易覆盖之前的key
// 可以使用新增的Symbol值创建唯一的值作为对象的key

// ES6中Symbol的使用
const s1 = Symbol();
const s2 = Symbol();
console.log(s1);  //  Symbol()
console.log(s1 === s2);  //  false  Symbol值唯一

// ES2019(ES10)中, 使用Symbol可以添加一个描述description
const s3 = Symbol("唯一的key");
console.log(s3.description);  // 唯一的key



// Symbol值作为key使用
// 写法一:定义字面量时
const obj1 = {
    [Symbol()]: "a",
    [Symbol()]: "b",
    [Symbol()]: "c",
}
console.log(obj1);  //  { [Symbol()]: 'a', [Symbol()]: 'b', [Symbol()]: 'c' }

// 写法二:新增属性
obj1[Symbol()] = "d"
console.log(obj1);  // { [Symbol()]: 'a', [Symbol()]: 'b', [Symbol()]: 'c', [Symbol()]: 'd' }

// 写法三:通过Object.defineProperty方式新增属性
Object.defineProperty(obj1, Symbol("e"), {
    enumerable: true,
    configurable: true,
    writable: true,
    value: "e"
})
console.log(obj1);

// 使用Symbol作为属性名, 在遍历Object.keys等方法中无法获取这些Symbol值
console.log(Object.keys(obj1));  // 无法获取 []
console.log(Object.getOwnPropertyNames(obj1));  // 无法获取 []

console.log(Object.getOwnPropertySymbols(obj1));  // 使用该方法获取 [ Symbol(), Symbol(), Symbol(), Symbol(), Symbol(e) ]
// 便利使用Symbol作为属性名的对象
for (const keys of Object.getOwnPropertySymbols(obj1)) {
    console.log(obj1[keys]);  // a b c d e
}


// 特殊情况下需要创建两个相同的Symbol值
// 使用Symbol.for(key)创建
const sa = Symbol.for("a")
const sb = Symbol.for("a")
console.log(sa === sb);  // true
// 使用Symbol.keyFor(keyName)获取
console.log(Symbol.keyFor(sa), Symbol.keyFor(sb));  // a a