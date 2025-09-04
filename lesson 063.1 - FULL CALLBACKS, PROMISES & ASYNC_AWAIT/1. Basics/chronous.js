// 1 
console.log("1) synchronous programming =>code executes line wise -:")
console.log("one")
console.log("two")
console.log("three")
console.log("four")
console.log("five")


// 2 
console.log("2) creating a function -:")

function hello() {
    console.log("dev")
}

hello() // expected output - dev

console.log(hello) /* expected output - ƒ hello(){
    console.log("dev")
} */


// 3 
console.log("3) setTimeout using normal function -:")    

function Time() {
    console.log("I am dev")
}

setTimeout(Time, 2000) // expected output - I am dev after 2 seconds 


// 4
console.log("4) setTimeout using arrow function -:")

setTimeout(() => {
    console.log("hello I am dev")
}, 2000) // expected output - I am dev after 2 seconds 


// 5 
console.log("5) asynchronus programming -:")

console.log("one")
console.log("two")
setTimeout(() => {
    console.log("one, two, three, four")
}, 2000)
console.log("three")
console.log("four")
