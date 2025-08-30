console.log("javscript promises api")

let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("value 1")
    }, 11000)

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

let promise_all = Promise.any([p1, p2, p3])

promise_all.then((value)=>{
    console.log(value) 
    // note that if in case p2 gets rejected then the terminal/BOM will throw an error to solve this problem we can use p.any -:

    // so now expected output is [p3] or value 3 
})

// Promise.resolve - makes a resolved promise with the given value

// Promise.reject - makes a rejected promise wit the given error 