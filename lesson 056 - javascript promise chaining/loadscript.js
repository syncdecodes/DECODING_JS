document.title = "loadscript"

const loadscript = (src) => {
    return new Promise((resolve, reject) => {

        let script = document.createElement("script")
        script.type = "text/javascript"
        script.src = src
        document.body.appendChild(script)
        script.onload = () => {
            console.log("loaded successfully")
            resolve("script has been loaded successfully")
        }
        script.onerror = () => {
            reject("script failed to load")
        }
    })
}

let promise1 = loadscript("http://localhost:3000/index.js")
promise1.then((value)=>{
    console.log(value)
}).catch((error)=>{
    console.log("problem loading script")
    console.log(value)
})