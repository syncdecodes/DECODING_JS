console.log("Using Fetch practically -:")

const FunJokes = document.getElementById("FunJokes")
const btn = document.querySelector("#btn")


const URL = 'https://v2.jokeapi.dev/joke/Any'

let getJokes = async () => {
    console.log("Wanna listen a Joke!")

    let JokeURL = await fetch(URL);
    console.log(JokeURL); // In JSON Format

    let JokeData = await JokeURL.json()
    console.log(JokeData)
    if (JokeData.type === "single") {
        FunJokes.innerHTML = JokeData.joke
    }
    else {
        console.log(JokeData.setup)
        console.log(JokeData.delivery)

        FunJokes.innerHTML =
            `<p>${JokeData.setup}</p>
        <p>${JokeData.delivery}</p>`
    }


}
getJokes()
btn.addEventListener("click", getJokes)









// OR
// console.log(await fetch (URL)) // => Same output