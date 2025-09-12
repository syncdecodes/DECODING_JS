console.log("function expression")

try {
    hello() // ReferenceError: Cannot access 'hello' before initialization
} catch (err) {
    console.log(err)
}
let hello = () => {
    console.log("hello Dev how are you doing")
}


try {
    hey() // ReferenceError: Cannot access 'hey' before initialization
} catch (err) {
    console.log(err)
}
const hey = () => {
    console.log("hey Sia how are you doing")
}

try {
    hii() // hii is not a function
} catch (err) {
    console.log(err)
}
var hii = () => {
    console.log("hii Kikku how are you doing")
}


// creating functions by different methods
function namaste() {
    console.log("namaste world")
}
namaste()

// ------------------

let num = function () {
    console.log("Your num is 09")
}
num()

// ------------------

let sum = function sum1() {
    console.log("Hello user1")
}
sum()


// ------------------

let employee = () => {
    console.log("hello employee")
}
employee()

// ------------------

function sum9(num1, num2) {
    return num1 + num2
}
let x = sum9(4, 4)
console.log(x)

// passing function inside function -:

let programmers = function Dev() {
    console.log("Hello dev programmer")
    let P1 = function kikuu() {
        console.log("Hello programmer kikuu")
        let P2 = function Sia() {
            console.log("Hello sia you are not a programmer")
        }
        return P2
    }
    return P1
}
programmers()

p1 = programmers()
p1()

P2 = p1()
P2()