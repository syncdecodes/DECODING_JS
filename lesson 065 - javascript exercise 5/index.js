console.log("I am going to hack you");

let first = document.getElementById("first");

function starthack() {
    return new Promise((resolve) => {
        setTimeout(() => {
            first.innerHTML = "Initializing Hack programme....";
            resolve();
        }, 2000);
    });
}

function getUsername() {
    return new Promise((resolve) => {
        setTimeout(() => {
            let name = prompt("Enter your name");
            first.innerHTML = 
            `<p>Initializing Hack programme....</p>
            <p>Hacking ${name}</p>`;
            resolve(name); // return the name
        }, 2000);
    });
}

function data(name) {
    return new Promise((resolve) => {
        setTimeout(() => {
            first.innerHTML = `
                <p>Initializing Hack programme....</p>
                <p>Hacking ${name}</p>
                <p>${name}'s data found</p>`;
            resolve();
        }, 2000);
    });
}

function account(name) {
    return new Promise((resolve) => {
        setTimeout(() => {
            first.innerHTML = `
                <p>Initializing Hack programme....</p>
                <p>Hacking ${name}</p>
                <p>${name}'s data found</p>
                <p>Connecting to Google account...</p>`;
            resolve();
        }, 2000);
    });
}
function thankyou(name) {
    return new Promise((resolve) => {
        setTimeout(() => {
            first.innerHTML = `
                <p>Initializing Hack programme....</p>
                <p>Hacking ${name}</p>
                <p>${name}'s data found</p>
                <p>Connecting to Google account...</p>
                <p>Thankyou ${name} your google account data has been fetched successfully</p>`;
            resolve();
        }, 2000);
    });
}

async function hackbegin() {
    await starthack();
    const name = await getUsername();
    await data(name);
    await account(name);
    await thankyou(name);
}

hackbegin();
