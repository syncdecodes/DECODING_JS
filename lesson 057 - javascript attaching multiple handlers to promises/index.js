console.log("javascript attaching multiple handlers to promises")

let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("I am resolved 1")
        resolve(10)
    }, 2000)
})

p1.then(() => {
    console.log("this promise is resolved 2")
})

p1.then(() => {
    console.log("this promise is resolved successfully 3")
})

// Chaining is a SERIES process and Multiple Handlers is a PARALLEL process, As simple as that.