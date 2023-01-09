const obj1 = {
    names: "wrj",
    age: 18,
    address: "浙江湖州安吉"
}

console.log(Object.keys(obj1));  // [ 'names', 'age', 'address' ]

console.log(Object.values(obj1));  // [ 'wrj', 18, '浙江湖州安吉' ]


// Object.values()的其他使用方法
console.log(Object.values([1, 2, 3, 4, 5, 6]));  // [ 1, 2, 3, 4, 5, 6 ]
console.log(Object.values("qwert"));  // [ 'q', 'w', 'e', 'r', 't' ]