let aaa = ["a", "b", "c"]
// for (const i = 0; i < aaa.length; i++) { //无法使用 相当于块级作用域内有i++操作
//     console.log(aaa[i]);
// }

for (let item of aaa) { //ES6新增 且可以使用const代替
    console.log(item);
}