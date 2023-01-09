const message = "hello world"

// String.padStart(填充后长度,以什么东西来填充默认为空格)
// String.padEnd(填充后长度,以什么东西来填充默认为空格)
const newMessage = message.padStart(15, "*").padEnd(20, "-")

console.log(newMessage);  // ****hello world-----

// 使用场景: 填充银行卡手机号码之类
const cardNumber = "123456789987456321"
const newCardNumber = cardNumber.slice(-4).padStart(cardNumber.length,"*")
console.log(newCardNumber);  // **************6321
