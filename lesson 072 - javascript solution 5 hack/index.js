console.log("Pretending to be a hacker using async function")
function first() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Initializing hack programme")
            resolve(200)
        }, 1000)
    })
}
function second() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("fetching data")
            resolve(200)
        }, 1000)
    })
}
function third() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data accessed")
            resolve(200)
        }, 1000)
    })
}
function fourth() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("programme hacked")
            resolve(200)
        }, 1000)
    })
}
function fifth() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("thankyou")
            resolve(200)
        }, 1000)
    })
}

async function hack_programme() {
    await first();
    await second();
    await third();
    await fourth();
    await fifth();
}
hack_programme()
