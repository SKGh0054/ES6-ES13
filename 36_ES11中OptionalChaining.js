// 可选链

const foo = {
    names: "wrj",
    friend: {
        names: "lilei",
        girlfriend: {
            names: "hmm"
        }
    }
}
console.log(foo.friend.girlfriend.names);
//如果后端返回的数据有误，没有friend，代码就会报错，无法继续执行后续代码
//以前解决方式依靠if语句进行判断
if (foo.friend && foo.friend.girlfriend && foo.friend.girlfriend.names) {
    console.log(foo.friend.girlfriend.names);
}

// ES11(ES2020)后提供了可选链 可以依次判断属性是否存在，如果真不存在就会返回undefined而不会报错，不会阻碍代码执行
console.log(foo?.friend?.girlfriend?.names);