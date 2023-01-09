const obj1 = { age: 18 }
const obj2 = { age: 20 }
// 1.对象{}不可以使用对象来当作key,只能使用字符串作为key
const info = {
    [obj1]: "boj-18",
    [obj2]: "boj-20"
}
// 这个写法会将obj1和obj2转化为字符串 => '[object Object]' 因为两者一模一样都是'[object Object]'所以后一个键值对会覆盖前面的
console.log(info);  // { '[object Object]': 'boj-20' }


// 2.Map就是允许我们对象类型及其他类型来作为key的
const map = new Map()
map.set(obj1, "18岁")
map.set(obj2, "20岁")
map.set(1, "地址")
console.log(map);  //Map(3) { { age: 18 } => '18岁', { age: 20 } => '20岁', 1 => '地址' }

// 创建Map时可以传入数组-格式为entries格式如下
// new Map([[key, value], [key, value], [key, value]])
const map2 = new Map([[obj1, "第一个"], [obj2, "第二个"], [3, "第三个"]])
console.log(map2);  // Map(3) { { age: 18 } => '第一个', { age: 20 } => '第二个', 3 => '第三个' }



//·3.常见的属性和方法
// Map.size
console.log(map2.size);  // 3

// .set
map2.set("why", "eee")
console.log(map2)  // Map(4) {{ age: 18 } => '第一个',{ age: 20 } => '第二个',3 => '第三个','why' => 'eee'}

// get(key)
console.log(map2.get("why"))  // eee

// has(key)
console.log(map2.has("why"))  // true

// delete(key)
map2.delete("why")
console.log(map2)  // Map(3) { { age: 18 } => '第一个', { age: 20 } => '第二个', 3 => '第三个' }

// clear()
map2.clear()
console.log(map2)  // Map(0) {}



// 4.遍历map
const map3 = new Map([[obj1, "第一个"], [obj2, "第二个"], [3, "第三个"]])

// 使用Map.forEach()遍历Map
map3.forEach((item, key) => {
    console.log(item, key)
    // 第一个 { age: 18 }
    // 第二个 { age: 20 }
    // 第三个 3
})

// 使用 for ... of 遍历Map
for (const item of map3) {
    console.log(item)
    // [ { age: 18 }, '第一个' ]
    // [ { age: 20 }, '第二个' ]
    // [ 3, '第三个' ]
}

// 使用 for ... of 遍历Map 并解构
for (const [key, value] of map3) {
    console.log(key, value)
    // { age: 18 } 第一个
    // { age: 20 } 第二个
    // 3 第三个
}