function foo() {
    function bar() {
        var message = "message"
    }
}

console.log(message);//无法访问


{
    var aaa = "aaa"
}

console.log(aaa);//aaa可以访问