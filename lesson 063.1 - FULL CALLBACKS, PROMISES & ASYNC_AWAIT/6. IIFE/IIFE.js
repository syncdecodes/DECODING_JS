console.log("IIFE : Immediately Invoked Function Expression")
// => IIFE is a function that is called immediately as soon as it is defined.


// when using IIFE function there's no need to call the function it will run automatically

// Normal function syntax -:

// let a = function () {
//     console.log("Dev")
// }

// a() // Dev
// console.log(a) // whole function


//     // IIFE function syntax -:

/*    (function () {
    })(); */

/* (()=>{
})() */


// IIFE example -:

function dev() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Hey dev")
            resolve(200)
        }, 2000)
    })
}
function kiku() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Hey kiku")
            resolve(200)
        }, 1000)
    })
}
function gaurav() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Hey gaurav")
            resolve(200)
        }, 1000)
    })
}

(async function () {
    await dev();
    await kiku();
    await gaurav();
})();

// No need to call any function it will run automatically :)