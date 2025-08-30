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

  DelhiWeather.then((value)=>{
    console.log(value) // expected output 31 Deg
  })

  BiharWeather.then(console.log) // :) ecpected output 21 Deg

}
weather()
 /*   calling weather because this -   DelhiWeather.then((value)=>{
    console.log(value)
  }) wont work in async function if we dont call waether()   */