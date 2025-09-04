function Hello(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Hello")
            resolve(200)
        }, 2000)
    })
}
function Hey(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Hey")
            resolve(200)
        }, 1000)
    })
}
function Hii(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Hii")
            resolve(200)
        }, 1000)
    })
}

async function allmsg(){
    await Hello();
    await Hey();
    await Hii();
}

allmsg()



function by_by(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("by_by")
            resolve(200)
        }, 5000)
    })
}
function byy(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("byy")
            resolve(200)
        }, 1000)
    })
}
function by(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("by")
            resolve(200)
        }, 1000)
    })
}

async function allbyy(){
    await by_by(); // till this code didn't gets fulfilled next will not run
    await byy();
    await by();
}

allbyy();

// console.log("async and await")

// // => async function returns a Promise and its compulsory 

// async function hello(){
//     console.log("hello")
// }

// console.log(hello()) // expected output hello Promise {<fulfilled>: undefined} 


// // 1 
// function api() {
//     return new Promise((resolve, reject)=>[
//         setTimeout(()=>{
//             console.log("weather data")
//             resolve(200)
//         }, 2000)
//     ])
// }

// api()  

// Doing 1 by using async await -:
// function myapi(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("My weather api")
//             resolve(200)
//         }, 3000)
//     })
// }

// async function getmyapi(){
//     await myapi(); // 1st call
//     await myapi(); // 2nd call
// }

// console.log(getmyapi())
