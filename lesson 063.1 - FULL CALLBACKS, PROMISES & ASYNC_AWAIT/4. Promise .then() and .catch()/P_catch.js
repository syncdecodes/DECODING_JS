console.log("understanding Promises .catch()")

function Data() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("I am a Promise and going to be rejected")
            reject(new Error("An error occured "))
        }, 2000)
    })
}

let getData = Data();
console.log(getData); // Promise {<pending>}

getData.catch((error)=>{
    console.log("rejected", error)
})

setTimeout(()=>{
    console.log(getData); /* Promise {<rejected>: Error: An error occured 
    at http://127.0.0.1:3000/P_catch.js:7:20} */
}, 3000)