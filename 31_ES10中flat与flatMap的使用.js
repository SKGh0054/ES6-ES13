// // flat的使用,为数组降维 不加参数默认降维1级
// const arr = [1, 2, [3, 4], 5, [[6, 7], [8, 9]], 10]
// const newarr = arr.flat()
// console.log(newarr);  // [ 1, 2, 3, 4, 5, [ 6, 7 ], [ 8, 9 ], 10 ]

// console.log(arr.flat(2));
// /**
//     [
//     1, 2, 3, 4,  5,
//     6, 7, 8, 9, 10
//     ]
// */


// Array.flatMap的使用场景
const arrMessage = ["i am www", "hello hi world", "aa bb cc dd"]
const words = arrMessage.flatMap(iteam => {
    return iteam.split(" ")
})
console.log(words);
/*
    [
    'i',   'am',
    'www', 'hello',
    'hi',  'world',
    'aa',  'bb',
    'cc',  'dd'
    ]
*/