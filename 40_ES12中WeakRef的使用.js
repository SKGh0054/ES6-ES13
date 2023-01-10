const finalRegistry = new FinalizationRegistry((value) => {  // 先new一个FinalizationRegistry用于监听对象销毁
    console.log(`注册在finalRegistry的对象,${value}被销毁了`);
})

let info2 = {
    names: "ccc",
    age: 20
}
// ES12(ES2021)新增 WeakRef类
// WeakRef 对象允许您保留对另一个对象的弱引用，而不会阻止被弱引用对象被 GC 回收
let message = new WeakRef(info2)
finalRegistry.register(info2, "info2")  // 给info2绑定register，info2指向的对象被销毁时会被监听
info2 = null
// WeakRef.prototype.deref()
// 返回当前实例的 WeakRef 对象所绑定的 target 对象，如果该 target 对象已被 GC 回收则返回undefined
// console.log(message.deref());  // {names: 'ccc', age: 20}

setTimeout(() => {
    console.log(message.deref()?.names);
}, 10000)
