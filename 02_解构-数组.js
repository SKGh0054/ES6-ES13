var namevul = ["a", "b", "c"]

// 解构
var [item1, item2, item3] = namevul
console.log(item1, item2, item3);//a b c

// 解构取一部分数据
var [, item2_1,] = namevul
console.log(item2_1);//b

// 剩余数据传入新数组
var [item1_1, ...newlist] = namevul
console.log(item1_1, newlist);//a [ 'b', 'c' ]

// 数组解构默认值
var [itema, itemb, itemc, itemd = "aaa"] = namevul//未指定默认值时为undefined
console.log(itema, itemb, itemc, itemd);//a b c aaa
