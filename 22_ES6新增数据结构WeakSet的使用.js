//WeakSet与Set类似

//一、WeakSet内部只能存放对象类型
const weakSet = new WeakSet()
// weakSet.add(1)  // TypeError: Invalid value used in weak set


//二、对对象是一个弱引用
const set1 = new Set()
const weakset1 = new WeakSet()
const foo = {
    name: "wrj"
}

const bar = {
    name: "wrj"
}

//建立强引用  => set1指向foo,foo指向name:"wrj" 当foo不指向name:"wrj"时 name:"wrj"不会被GC销毁
set1.add(foo)

//建立弱引用  => set1指向bar,bar指向name:"wrj" 当bar不指向name:"wrj"时 name:"wrj"会被GC销毁
weakset1.add(bar)

// weakSet常用方法
// 1.weakSet.add()
// 2.weakSet.delete()
// 3.weakSet.has()

// 因为weakSet是对对象的弱引用,如果我们遍历获取到其中的元素,那么有可能造成对象不能正常的销毁
// 所以存储到WeakSet中的对象是没办法获取的


// weakSet的应用场景
const personSet = new WeakSet()
class Person {

    constructor() {
        personSet.add(this)  //weakSet弱引用,传进的this如果不是构造器传入的this则会被销毁
    }

    running() {
        if (!personSet.has(this)) {
            throw new Error("不能通过非构造方法创建出来的对象调用running方法")
        }
        console.log("running~ ", this)
    }
}
let p = new Person()
p.running()  // 常规调用方法  running~  Person {}

//Error: 不能通过非构造方法创建出来的对象调用running方法
p.running.call({ name: "why" })  // call调用,函数内部this会指向{ name: "why" }
