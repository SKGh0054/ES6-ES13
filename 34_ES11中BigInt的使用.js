// ES11(ES2020)之前表示安全的最大数

const maxNumber = Number.MAX_SAFE_INTEGER
console.log(maxNumber);  // 9007199254740991
// 更大的数就表示不准确了
console.log(maxNumber + 1);  // 9007199254740992
console.log(maxNumber + 2);  // 9007199254740992

// ES11之后:BigInt
// 在一个大的数据后加 n 即可转为BigInt
const bigInt = 90071992547409910000n
// BigInt与其他数据不能直接参与运算(没有隐式转换)需要手动转化对应的数据类型
console.log(bigInt + 10n)  // 90071992547409910010n

const num = 100
// 变量计算使用BigInt()进行转换
console.log(bigInt + BigInt(num))  // 90071992547409910100n

const smallNum = Number(bigInt)  // 大数转其他数据类型不安全
console.log(smallNum)
