console.log("javascript async/await functions -:")
async function weather() {
    

let DelhiWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("31 Deg")
    }, 2000)

})

let BiharWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("21 Deg")
    }, 3000)

})
console.log("Fetching Delhi weather pls wait....")
 let DelhiW = await DelhiWeather
 console.log("Delhi weather fetched")
 console.log("Fetching Bihar weather pls wait.....")
 let BiharW = await BiharWeather
 console.log("Bihar weather featched")

 return [DelhiW, BiharW]

}
let a = weather()
a.then((value)=>{
    console.log(value)
})