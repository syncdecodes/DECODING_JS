let promise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error ("this is not acceptable its an error "))
        }, 2000)
    })
}

let a = async () => {
    try {
        let b = await promise()
        console.log(b)
    }
    catch (err) {
        console.log("this error has been handeled")
    }
}
a()
