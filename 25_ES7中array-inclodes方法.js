const names = ["abc", "cba", "bac", "cab", NaN]

// 之前使用indexOf判断索引值是否为 -1
if (names.indexOf("bac") !== -1) {
    console.log("包含该元素");  // 包含该元素
}

// ES7(ES2016) 新增 includes(放置元素, 从第几个位置开始判断)
if (names.includes("abc", 0)) {
    console.log("包含该元素");  // 包含该元素
}

// 区别:如果数组内包含NaN则indexOf方法无法判断includes方法可以判断
if (names.indexOf(NaN) !== -1) {
    console.log("包含NaN");
}
if (names.includes(NaN, 0)) {
    console.log("包含NaN");  // 包含NaN
}