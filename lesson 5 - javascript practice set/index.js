let a = "sakshi"
let b = 9;
console.log(typeof a)
console.log(typeof b)
console.log(a + b)
console.log(typeof a + b)
console.log(typeof (a + b))

const code = {
    name1: "dev",
    name2: "sia",
    name3: "sakshi"
}
// code = "hello"
// console.log(code) we cant it will throw error 

/* but we an do this instead*/

code["name4"] = "krish"

// this is a const but stil we managed to change its value bcs it is its key and element which can be changed 

console.log(code)

const dictonary = {
    moon: "chand",
    sun: "suraj",
    earth: "prithvi"
}
console.log(dictonary)
console.log(dictonary.moon)
console.log(dictonary.sun)
console.log(dictonary.earth)
console.log(dictonary["moon"])
console.log(dictonary["sun"])
console.log(dictonary["earth"])