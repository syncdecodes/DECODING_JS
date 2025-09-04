console.log("understanding Promises .then()")
// => In general programming usually we dont need to create a promise either we have to use promise once we get one by using .then() and .catch()

// 1
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Hey I am a Promise no 1")
        resolve("And I am resolved after 2s")
    }, 2000)
})

promise.then((value) => {
    console.log(value) // Use .then() when the promise gets resolved 
})

// 2
function GetPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Hey I am Promsie no 2")
            resolve("And I got resolved after 4s")
        }, 4000)
    })
}


let P = GetPromise();
console.log(P) // Promise {<pending>}

setTimeout(() => {
    console.log(P)
}, 5000) // Promise {<fulfilled>: 'And I got resolved after 4s'}

P.then((value) => {
    console.log(value)
})