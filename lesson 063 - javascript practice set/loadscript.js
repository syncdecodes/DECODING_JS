console.log("Code to load a loadscript using promises")

const loadscript = async (src) => {
    return new Promise((resolve, reject) => {
        let script = document.createElement("script")
        script.src = src
        script.onload = () => {
            resolve("src loaded successfully " + src)
        }
        document.head.append(script)
    })
}

let a = loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js")
a.then((value) => {
    console.log(new Date().getMilliseconds())

    console.log(value)
    console.log(a)

    console.log(new Date().getMilliseconds())
})




/* const loading = async () => {
    console.log(new Date().getMilliseconds())
    let a = await loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js")
    console.log(a)
    console.log(new Date().getMilliseconds())
}
loading() */ // => professional method which I didn't get @ all at the moment....  :(

// loading() - calling loading