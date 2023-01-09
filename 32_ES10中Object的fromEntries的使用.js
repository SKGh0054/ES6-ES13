const obj1 = {
    names: "wrj",
    age: 18,
    address: "浙江湖州安吉"
}
const obj2 = Object.entries(obj1)
console.log(obj2);  // [ [ 'names', 'wrj' ], [ 'age', 18 ], [ 'address', '浙江湖州安吉' ] ]

const obj3 = Object.fromEntries(obj2)
console.log(obj3);  // { names: 'wrj', age: 18, address: '浙江湖州安吉' }


// Object.fromEntries的使用场景 => 前端对于网页请求参数的解析
const queryString = "name=wrj&age=18&height=188&address=qwert"

const queryParams = new URLSearchParams(queryString)  // 将网页请求参数转化为一个URLSearchParams可迭代对象
console.log(queryParams);  // URLSearchParams { 'name' => 'wrj', 'age' => '18', 'height' => '188', 'address' => 'qwert' }

const paramsObj = Object.fromEntries(queryParams)  // 将一个可迭代对象或者entries对象转化为object对象
console.log(paramsObj);  // { name: 'wrj', age: '18', height: '188', address: 'qwert' }