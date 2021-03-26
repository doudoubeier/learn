async function testAsync() {
    return 'hello async'
}

function testNormal() {
    return 'hello normal'
}

// async function test() {
//     const r1 = await testNormal()
//     const r2 = await testAsync()
//     console.log(r1, r2)
// }

// test()
// const result = testAsync()
// console.log(result)

function takeLongTime() {
    return new Promise((resolve) => {
        setTimeout(() => resolve('long_time_value'), 1000)
    })
}

async function test() {
    const v = await takeLongTime()
    console.log(v)
}

test()