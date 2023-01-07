let foo = "foo";
if (true) {
    console.log(foo); //ReferenceError: Cannot access 'foo' before initialization
    let foo = "bar";
}