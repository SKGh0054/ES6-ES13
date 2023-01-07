var btns = document.getElementsByTagName("button")

for (var i = 0; i < btns.length; i++) {
    btns[i].onclick = function () {
        console.log("第" + i + "个按钮。");//输出的全是 第4个按钮
    }
}

// 原先解决方法--添加一个立即执行函数-即加一个函数作用域
for (var i = 0; i < btns.length; i++) {
    (function (n) {
        btns[i].onclick = function () {
            console.log("第" + i + "个按钮。");
        }
    })(i)
}

// 有块级作用域后 正常输出
for (let i = 0; i < btns.length; i++) {
    btns[i].onclick = function () {
        console.log("第" + i + "个按钮。");
    }
}