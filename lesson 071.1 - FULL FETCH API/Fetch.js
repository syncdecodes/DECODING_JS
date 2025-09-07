console.log("Javascript understanding fetch API -> The fetch API provides an interface for fetching (sending/receiving) resources. => It uses requests and response objects.")

console.log("API stands for application programming interface -> API is a place where data is stored")




const URL1 = "https://api.open-meteo.com/v1/forecast?latitude=28.61&longitude=77.20&current_weather=true"

const URL2 = 'https://api.open-meteo.com/v1/forecast?latitude=34.69&longitude=135.50&hourly=temperature_2m'


// 1
async function getweather(){
    console.log("Here we w'll provide you latest weather updates")
    let link1 = fetch(URL1);
    console.log(link1)
}
getweather() // Promise {<pending>}




// 2
async function getdata(){
console.log("Get latest data..")
let link2 = await fetch(URL2);
console.log(link2)
}
getdata() // Response
console.log(getdata) // whole function






// => Normal async await function -:

// function hello(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("hello")
//             resolve(200)
//         }, 2000)
//     })
// }

// async function hey() {
// await hello();
// }

// hey()



