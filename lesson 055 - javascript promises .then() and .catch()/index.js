console.log("javascript promosises .then() and .catch()")

// syntax of promise -:

let promise = new Promise((resolve, reject) =>{
console.log("Promise is pending")
setTimeout(function(){
    console.log("I am inside promise function and will be fulfilled (resolved or rejected) - I am resolved")
    // eg - you ordered pizza from zomato and it gets delivered means (resolve); but if the order get cancelled then it means (reject)
    // => in both the cases the promise gets fulfilled 

    resolve(true)
    // reject(new Error("I am an error")) => syntax to throw a new error
}, 2000)
})

let mypromise = new Promise((resolve, reject) =>{
console.log("Promise is pending")
setTimeout(function(){
    console.log("I am inside promise function and will be fulfilled (resolved or rejected) - I am rejected")
    // eg - you ordered pizza from zomato and it gets delivered means (resolve); but if the order get cancelled then it means (reject)
    // => in both the cases the promise gets fulfilled 

    // resolve(true)
    reject(new Error("I am an error")) // syntax to throw a new error
}, 2000)
})

console.log(promise, mypromise)

// => .then() and .catch()

promise.then((value)=>{
    console.log(value) // expected output true 
    console.log(promise) // expected output promise {<fulfilled>: true}
})

mypromise.then((value)=>{
    console.log(value) // expected output - nothing because my promise got rejected
})

mypromise.catch((error)=>{
    console.log("some error incurred")
})

  console.log(promise) // expected output 