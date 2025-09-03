console.log("Post requests in Fetch using async_await")

const URL = "https://jsonplaceholder.typicode.com/users"

let mydata = {
    name: "Dev",
    age: 17,
    height: 5.9,
    weight: "60kg",
    education: "KMV"
}

let P_data = async function () {
    console.log("Posting my personal data.....")
    let link = await fetch(URL, {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(mydata)
    });
    console.log(link) // Response
    let data_post = await link.json()
    console.log(data_post) // parsed JSON response as an object
}
P_data() // expected output - {name: 'Dev', age: 17, height: 5.9, weight: '60kg', education: 'KMV', …}




/*  --------------  OR ------------- */
const URL2 = "https://jsonplaceholder.typicode.com/users"

let object = {
    method: 'POST',
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        name: "gaurav",
        age: 15,
        height: 5.3,
        weight: "40kg",
        education: "PGDAV"
    })

}

let Y_data = async function () {
    const response = await fetch(URL2, object);
    const data = await response.json();
    console.log(data)
}
Y_data()





/* 
IMP -:
await itself does not return a Promise — it waits for one and gives you the resolved value. 
let result = await somePromise;
Here's what happens under the hood:

somePromise is a Promise.

await pauses the execution of the async function until that Promise resolves (or rejects).

Then it returns the resolved value, not a Promise.
*/






/* console.log(data_post); // ✅ This is the parsed JSON response
And you mentioned:

I have used stringify and parse, so does it mean it's an object?

✅ Yes — data_post is a JavaScript object.
Let’s break it down clearly:

🔁 Flow Summary
You used JSON.stringify(mydata) in the request body:




body: JSON.stringify(mydata)
This turns your mydata object into a JSON string before sending it to the server.

On receiving the response, you used:




let data_post = await link.json();
The .json() method reads the response body and automatically parses the JSON string back into a JavaScript object — like using JSON.parse() internally.

So at this point:



console.log(data_post); // ✅ JavaScript object
🔍 Example
Let’s say your original object:



let mydata = {
    name: "Dev",
    age: 17,
    height: 5.9,
    weight: "60kg",
    education: "KMV"
};
When you send it, it's stringified:

json


'{"name":"Dev","age":17,"height":5.9,"weight":"60kg","education":"KMV"}'
When .json() parses the response — you get back an object:




{
    name: "Dev",
    age: 17,
    height: 5.9,
    weight: "60kg",
    education: "KMV",
    id: 11 // ← added by the fake API server
}
So yes — data_post is a JavaScript object after .json() — no need to parse it again.

✅ Final Takeaway:
JSON.stringify() → turns an object into a string

.json() (like JSON.parse()) → turns a JSON string into a JavaScript object

data_post is already an object, so you're good to go! */
