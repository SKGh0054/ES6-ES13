// Set类似数组但是数组可以有重复值Set没有重复值(暂时没有字面量的创建方法)
// 创建Set结构
const set = new Set()
set.add("a")
set.add(undefined)
set.add(1)
set.add({})
set.add({})
console.log(set);  // Set(5) { 'a', undefined, 1, {}, {} }

// Set可以给数组去重
const arr = [10, 20, 10, 20, 10, 30, 40, 10, 20, 40, 10]
// 常规去重
const newArr = []
for (const item of arr) {
    if (newArr.indexOf(item) == -1) {
        newArr.push(item)
    }
}
// Set去重, Set(可传入可迭代对象)
const arrSet = new Set(arr)
console.log(arrSet);  // Set(4) { 10, 20, 30, 40 }
const newarr1 = Array.from(arrSet)  //from(可传入可迭代对象)
console.log(newarr1); // [ 10, 20, 30, 40 ]
const newarr2 = [...arrSet]  // 或者使用展开运算符
console.log(newarr2);  // [ 10, 20, 30, 40 ]


// .size属性, 返回元素个数
console.log(arrSet.size);  // 4


// Set的常用方法
const set1 = new Set([1, "wrj", {}])
// 1. add()方法
set1.add(100)
console.log(set1);  // Set(4) { 1, 'wrj', {}, 100 }

// 2. delete()方法
set1.delete(100)
console.log(set1);  // Set(3) { 1, 'wrj', {} }

// 3. has()方法
console.log(set1.has("wrj"));  // true

// 4. clear()方法
set1.clear()
console.log(set1);  // Set(0) {}

// 5.对Set遍历
set1.add("1")
set1.add("2")
set1.add("3")

set1.forEach((item) => {  // 使用forEach()方法便利
    console.log(item);  // 1 2 3
})

for (const item of set1) {  // 使用for...of方式便利
    console.log(item);  // 1 2 3
}