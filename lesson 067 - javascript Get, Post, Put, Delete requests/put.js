console.log("Put requests");

const URL = "https://jsonplaceholder.typicode.com/users/3";

const updatedUser = {
    name: "Dev Updated",
    age: 18,
    height: 6.0,
    weight: "65kg",
    education: "Updated University"
};

let updateuser = async function () {
    const response = await fetch(URL, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedUser)
    });

    const data = await response.json();
    console.log("updateduser data :", data);
};

updateuser();

// put is just like post it just updates the data if there is older one simple dont remember to give and id to the url => /n



const URL1 = "https://jsonplaceholder.typicode.com/users/2"

const updatedUser1 = {
    name: "Dev Updated 1",
    age: 20,
    height: 6.1,
    weight: "67kg",
    education: "Updated University - KMV"
};

let updateuser1 = async function () {
    const response = await fetch(URL1, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedUser1)
    })
    const data = await response.json();
    console.log("updateduser data :", data)
}

updateuser1()
