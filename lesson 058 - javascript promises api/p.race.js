console.log("javscript promises api")

let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("value 1")
    }, 11000)

})

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("value 2")
    }, 2000)

})

let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("value 3")
    }, 3000)

})

let promise_all = Promise.race([p1, p2, p3])

promise_all.then((value)=>{
    console.log(value) // the one promise which takes the least time to load means -[p2]
    // expected output - value 2 
})