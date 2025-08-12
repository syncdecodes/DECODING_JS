console.log("javascript promise chaining")

let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("resolved after 2 seconds")
        resolve(56)
    }, 2000)
})

p1.then((value) => {
    console.log(value)
    let p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("promise2 after 2 seconds")
        }, 2000)

    })
    return p2
}).then((value) => {
    console.log("we are done")
    return new Promise((resolve, reject) => {
        resolve(50)
        /* we can directly return value like this -:
        [return new Promise((resolve, reject) => {
        resolve(50)] hence -:
        no need to make a new variable - let p2, let p3 ......*/
    })
    

}).then((value) => {
    setTimeout(() => {
        console.log(value)
        console.log("we are done now and its confirm")
    }, 2000)

})
