console.log("(1st console) understanding Promises")

function num(mynum, yournum) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("(2nd console) My number is : ", mynum)
            resolve("num resolved")
            if (yournum) {
                yournum();
            }
        }, 2000);
    });
}

let number = num();
console.log(number) // Promise {<pending>} - because num() is called immediately but yet not resolved as it will resolve after 2s

setTimeout(()=>{
    console.log(number) // Promise {<fulfilled>: 'num resolved'} - because this function is called after 3s when num() finally got resolved
}, 3000)

/* In simple words when we call num() it will return a promise {<pending>} which will be fulfilled (either resolves or gets rejected) after 2s, then it gives the data means finally gets fulfilled */
