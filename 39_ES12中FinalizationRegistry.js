// ES12(ES2021)新增FinalizationRegistry类 可以监听对象的销毁
// GC不定时会清除不被引用的对象 释放内存
const finalRegistry = new FinalizationRegistry((value) => {
    console.log(`注册在finalRegistry的对象,${value}被销毁了`);
})
let obj = {
    names: "www",
    age: 18
}
let info = {
    names: "ccc",
    age: 20
}
// register(对象,对象描述(可以分辨对象))
finalRegistry.register(obj, "obj")
finalRegistry.register(info, "info")
obj = null
info = null





