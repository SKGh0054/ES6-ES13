const myname = "wrj"
const myage = 18
const myheight = 188

function doubleheight() {
    return myheight * 2
}

// 普通字符串拼接
let message = "我的名字是:" + myname + ",我的年龄是:" + myage + ",我的身高是:" + myheight + "."

// 模板字符串拼接
let message1 = `我的名字是:${myname},我的年龄是:${myage},我的身高是:${myheight}.`

// 模板字符串计算
let message2 = `我的年龄的俩倍是:${myage * 2}`

// 模板字符串函数调用
let message3 = `我的身高的俩倍是:${doubleheight()}`

console.log(message);//我的名字是:wrj,我的年龄是:18,我的身高是:188.
console.log(message1);//我的名字是:wrj,我的年龄是:18,我的身高是:188.
console.log(message2);//我的年龄的俩倍是:36
console.log(message3);//我的身高的俩倍是:376