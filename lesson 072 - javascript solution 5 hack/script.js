console.log("Harry bhai ka code")

let programme = document.querySelector(".programme")
console.log(programme)

let object = [
    "Initializing Hack programme",
    "Connecting to main accounts",
    "Connecting to Server 1",
    "Connection failed",
    "Connecting to server 2",
    "Connection succeeded",
    "Programe hacked successfully"
]
const sleep = async (seconds) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true)
        }, seconds * 1000)
    })
}
const hack_programme = async (messages) => {
    await sleep(2)
    console.log(messages)
    programme.innerHTML = programme.innerHTML + messages +  "<br>" + "<br>"
}
(async () => {
    for (let index = 0; index < object.length; index++) {
       await hack_programme(object[index])
    }
})()

/* 

 the “one-by-one after 2 seconds” effect is all about how await inside the loop forces sequential execution.

Let’s walk through what’s actually happening:

1. The loop is synchronous in structure but asynchronous in execution
js
Copy
Edit
for (let index = 0; index < object.length; index++) {
    await hack_programme(object[index])
}
The for loop itself is not asynchronous — it just runs in the normal order: index 0 → index 1 → index 2...

But because we wrote await hack_programme(...), the loop pauses each time until hack_programme finishes.

 */ 