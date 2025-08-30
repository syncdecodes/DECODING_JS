console.log("javscript promises api")

let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("value 1")
    }, 1000)

})

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
       reject(new Error("Error occured"))
    }, 2000)

})

let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("value 3")
    }, 3000)

})

// now if we want that even if any Error occurs then also Promise.all works we can use this -:

let promise_all = Promise.allSettled([p1, p2, p3])

promise_all.then((value)=>{
    console.log(value) // expected output array with value and status of resolved and rejected 

}).catch((Error)=>{
    console.log(Error)
})

// Try to Run this code in node js terminal


