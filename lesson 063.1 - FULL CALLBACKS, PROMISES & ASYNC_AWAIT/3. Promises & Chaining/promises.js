console.log("Promises")

// promise pending..
let my_promise = new Promise((resolve, reject) => {
    console.log("I am a Promise");
})
console.log(my_promise)

// promise fulfilled - resolved 
let promise = new Promise((resolve, reject) => {
    console.log("I am a Promise");
    resolve("Promise resolved")
})
console.log(promise)

// promise rejcetd 
let your_promise = new Promise((resolve, reject) => {
    console.log("I am a Promise");
    reject("Promise rejected")
})
console.log(your_promise)

function GetData(DataId, GetNxtData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data", DataId);
            resolve("success")
            if (GetNxtData){
                GetNxtData();
            }
        }, 2000)
    })
}

let result = GetData(123);
console.log(result)

setTimeout(()=>{
    console.log(result)
},3000)