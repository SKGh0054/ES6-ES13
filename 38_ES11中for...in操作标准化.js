// for...in操作标准化:ECMA
const foo = {
    names: "www",
    age: 18,
    address: "wwwwww"
}
// ES11之前没有对实现进行规定有的浏览器for...in给的时key有的给的是value
for (const item in foo) {
    console.log(item);
}