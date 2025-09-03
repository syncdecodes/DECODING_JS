console.log("Post request using Promise chaining")

const URL = "https://jsonplaceholder.typicode.com/users"

let options = {
    method: "POST",
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'krish',
        age: 15,
        height: 5.7,
        weight: "50kg"
    })

}

fetch(URL, options) // note nd remember that fetch API returns a Promise
.then((response)=>{
    console.log(response)
    return response.json()
}).then((data)=>{
    console.log(data)
})

/* ------  OR ------ */

const URL2 = "https://jsonplaceholder.typicode.com/users"

fetch(URL, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        friend: "kiku",
        age: 17,
        height: 5.4,
        weight: "50kg"
    })
})
.then(response => response.json())
.then(data => console.log(data))





/* 
.then() is a method on a Promise object.
It is used to define what should happen when the Promise resolves (i.e., succeeds).


💡 Key Points
1. .then() takes a callback function
The callback is executed after the Promise is resolved.


somePromise.then((resolvedValue) => {
  // Use resolvedValue here
});



2. .then() returns a new Promise
So you can chain more .then() blocks.

fetch(URL)
  .then((res) => res.json()) // returns a new Promise
  .then((data) => {
    // do something with data
  });
Each .then() in the chain waits for the previous one to finish.
*/

// JSON.stringify() - converts js object into a string
// JSON.parse() - converts a valid js string into an object