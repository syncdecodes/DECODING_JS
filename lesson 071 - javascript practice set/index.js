console.log("Javascript Practice Set")

const URL = "https://v2.jokeapi.dev/joke/Miscellaneous,Pun?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";


console.log("1st fetch (URL) using async function")
let asyncfunc = async function (){
    const response = await fetch(URL)
    console.log(response)
    const data = await response.json()
    console.log(data)
    for (item in data){
        console.log(data[item])
    }
}
asyncfunc()
