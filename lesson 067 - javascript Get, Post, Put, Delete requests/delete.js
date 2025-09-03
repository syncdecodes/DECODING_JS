console.log("delete requets")

const URL = "https://jsonplaceholder.typicode.com/users/3"

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
    const response = await fetch(URL, object);
    const data = await response.json();
    console.log(data)
}
Y_data()

fetch(URL, {
    method: "DELETE"
})
.then(response => response.json())
.then(data => console.log(data))

// expected output empty {} for the whole URL check console

/* => Very IMP!
 The key points:
DELETE requests usually require an ID or specific resource to delete — like https://jsonplaceholder.typicode.com/users/3 to delete user with ID 3.

If you call DELETE on the base URL without an ID (e.g. https://jsonplaceholder.typicode.com/users), most APIs will not know what to delete or will reject the request.

jsonplaceholder.typicode.com API returns an empty object {} on DELETE (mock API behavior).

DELETE requests usually don’t return a JSON body — often you get empty responses, so calling .json() might fail or return {}. 
*/