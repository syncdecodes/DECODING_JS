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

/* p1.then((value)=>{
    console.log(value)
})

p2.then((value)=>{
    console.log(value)
})

p3.then((value)=>{
    console.log(value)
}) 
to know that all codes are fulfilled we will use promise.all -: */

let promise_all = Promise.all([p1, p2, p3])

promise_all.then((value)=>{
    console.log(value)

    // when we use Promise.all and if any of the promise is rejected then Promise.all wont work
    
}).catch((Error)=>{
    console.log(Error)
})
