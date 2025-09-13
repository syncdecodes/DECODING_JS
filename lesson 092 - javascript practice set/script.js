console.log("JS Practice set")

const a = function hello() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(200)
            console.log("Hello")
        }, 100)
    })
}
const b = function world() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(200)
            console.log("World")
        }, 100)
    })
}

let call = async function () {
    await a();
    await b();
}
call()

function sum(a, b, c) {
    return a + b + c
}
let x = [3, 4, 5]
console.log(sum(...x)); // <=  note to invoke IIFE use a semicolon before initialization of IIFE 

(function hd(n = 2) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(200)
            console.log("Hello dev")
        }, 1000 * n)
    })
})()

function simple(principal, rate, time) {
    return (principal * rate * time) / 100;
}
let y = [20000, 9, 4]
console.log(simple(...y))
console.log(simple(20000, 9, 4))

