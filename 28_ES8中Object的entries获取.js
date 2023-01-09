const obj1 = {
    names: "wrj",
    age: 18,
    address: "浙江湖州安吉"
}

console.log(Object.entries(obj1));  // [ [ 'names', 'wrj' ], [ 'age', 18 ], [ 'address', '浙江湖州安吉' ] ]

// 使用entries进行遍历
const entriesArr = Object.entries(obj1)
entriesArr.forEach(element => {
    console.log(element);
    /**
    [ 'names', 'wrj' ]
    [ 'age', 18 ]
    [ 'address', '浙江湖州安吉' ]
    */
});


// 数组转entries格式 => [[索引值，数据],[索引值，数据],[索引值，数据]]
console.log(Object.entries(["a", "b", "c"]));  // [ [ '0', 'a' ], [ '1', 'b' ], [ '2', 'c' ] ]
// 字符串同理
console.log(Object.entries("abc"));   // [ [ '0', 'a' ], [ '1', 'b' ], [ '2', 'c' ] ]