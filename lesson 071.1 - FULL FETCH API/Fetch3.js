console.log("Ftech2 using promise chaining")

const URL = 'https://v2.jokeapi.dev/joke/Any'


function getJokes() {
    fetch(URL).then((response) => {
        console.log(response)
        return response.json();
    }).then((data) => {
        console.log(data)
    })
}
getJokes()






// function getJokes() {
//    let a  = fetch(URL).then((response)=>{
//     console.log(response)
//     console.log(a)
//    }).then((data)=>{
//     console.log(data)
//    })
// }
// getJokes()

// => expected output

 /* Response {type: 'basic', url: 'http://127.0.0.1:3000/function%20URL()%20%7B%20[native%20code]%20%7D', redirected: false, status: 404, ok: false, …} 

Promise {<pending>} 
undefined */