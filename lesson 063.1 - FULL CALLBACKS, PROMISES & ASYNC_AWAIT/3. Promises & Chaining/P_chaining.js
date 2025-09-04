console.log("Promise chaining ")

function asynchronous1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Fetching data1.....")
            resolve("data1 fetched")
        }, 4000)
    })
}

function asynchronous2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Fetching data2.....")
            resolve("data2 fetched")
        }, 4000)
    })
}
function asynchronous3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Fetching data3.....")
            resolve("data3 fetched")
        }, 4000)
    })
}

// scenerio - first you have to fetch data1 then after it got fetched then fetch data2 then data3 -: (Promise chaining)

let D1 = asynchronous1()
D1.then((value) => {
    console.log(value)
    let D2 = asynchronous2()
    D2.then((value) => {
        console.log(value)
        let D3 = asynchronous3()
        D3.then((value) => {
            console.log(value)
        })
    })
})



// -----------



function num1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("What is your fav number")
            resolve("No matter what from now your fav no is 9")
        }, 2000)
    })
}

console.log(num1())
num1().then((result) => {
    setTimeout(() => {
        console.log(result)
    }, 1000)

}).then(() => {
    setTimeout(() => {
        console.log("Got it??")
    }, 2000)
}).then(() => {
    setTimeout(() => {
        console.log("Congrats 9 is actually a pretty good number")
    }, 3000)
}).then(() => {
    setTimeout(() => {
        console.log("Ohk byy enjoy :)")
    }, 4000)
})



// -------------



function data() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("1 => What data do you want??")
            resolve(12345)
        }, 2000)
    })
}
function data1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("2 => What data do you want??")
            resolve(56789)
        }, 2000)
    })
}
function data2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("3 => What data do you want??")
            resolve(10)
        }, 2000)
    })
}


// => Promise chaining
data().then((value) => {
    console.log(value, "? Or")
    data1().then((result) => {
        console.log(result, "? Or")
        data2().then((result) => {
            console.log(result)
        }).then(() => {
            setTimeout(() => {
                console.log("Success you got your data")
            }, 2000)

        })
    })
})




// Better way of doing Promise chaining -:





function Birthday1() {
    return new Promise((resolve, rejcet) => {
        setTimeout(() => {
            console.log("Your birthday is on..")
            resolve("5th July")
        }, 2000)
    })
}

function Birthday2() {
    return new Promise((resolve, rejcet) => {
        setTimeout(() => {
            console.log("Your birthday is on..")
            resolve("10th July")
        }, 2000)
    })
}

function Birthday3() {
    return new Promise((resolve, rejcet) => {
        setTimeout(() => {
            console.log("Your birthday is on..")
            resolve("15th July")
        }, 2000)
    })
}

function Birthday4() {
    return new Promise((resolve, rejcet) => {
        setTimeout(() => {
            console.log("Your birthday is on..")
            resolve("20th July")
        }, 2000)
    })
}

function Birthday5() {
    return new Promise((resolve, rejcet) => {
        setTimeout(() => {
            console.log("Your birthday is on..")
            resolve("25th July")
        }, 2000)
    })
}

// Promise chaining again

Birthday1().then((result) => {
    console.log(result)
    return Birthday2(); // calling Birthday2 Promise
}).then((result) => {
    console.log(result)
    return Birthday3();
}).then((value) => {
    console.log(value)
    return Birthday4();
}).then((value) => {
    console.log(value)
    return Birthday5();
}).then((resval) => {
    console.log(resval)
}).then(() => {
    setTimeout(() => {
        console.log("You all got your birthday dates now go celebrate and enjoy :)")
    }, 2000)
}).then(() => {
    setTimeout(() => {
        console.log("By the way which birtday date you like the most..? Do tell me in the comment section")
    }, 4000)
})

// Now we will learn async_await




