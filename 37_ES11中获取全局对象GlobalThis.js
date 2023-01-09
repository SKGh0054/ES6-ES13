// 获取某一个环境下的全局对象(Global Object)

// 1.在浏览器下:window或者this
console.log(window);
console.log(this);


// 2.在node下:global
console.log(global);
/*
    <ref *1> Object [global] {
    global: [Circular *1],
    queueMicrotask: [Function: queueMicrotask],
    clearImmediate: [Function: clearImmediate],
    setImmediate: [Function: setImmediate] {
        [Symbol(nodejs.util.promisify.custom)]: [Getter]
    },
    structuredClone: [Function: structuredClone],
    clearInterval: [Function: clearInterval],
    clearTimeout: [Function: clearTimeout],
    setInterval: [Function: setInterval],
    setTimeout: [Function: setTimeout] {
        [Symbol(nodejs.util.promisify.custom)]: [Getter]
    },
    atob: [Function: atob],
    btoa: [Function: btoa],
    performance: Performance {
        nodeTiming: PerformanceNodeTiming {
        name: 'node',
        entryType: 'node',
        startTime: 0,
        duration: 53.39680004119873,
        nodeStart: 4.321700036525726,
        v8Start: 8.778400003910065,
        bootstrapComplete: 35.856100022792816,
        environment: 21.6182000041008,
        loopStart: -1,
        loopExit: -1,
        idleTime: 0
        },
        timeOrigin: 1673280203185.999
    },
    fetch: [AsyncFunction: fetch]
    }
*/


// ES11(ES2020)新增 globalThis 在不同的环境下指向不同的全局对象
console.log(globalThis);