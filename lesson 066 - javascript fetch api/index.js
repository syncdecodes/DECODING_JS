console.log("JavaScript Fetch API");

// => API stands for Application Programming Interface

let p = fetch("https://icanhazdadjoke.com/", {
    headers: {
        'Accept': 'application/json'  // <-- Tells API to return JSON
    }
});

console.log(p);

p.then((response1) => {
    console.log(response1.status)
    console.log(response1.ok)
    console.log(response1.headers)
    return response1.json();
}).then((response2) => {
    console.log(response2); // Contains a "joke" property
});
