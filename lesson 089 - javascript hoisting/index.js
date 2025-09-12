console.log("JS hoisting")

hello() // It will run successsfully bcs of hoisting
function hello() {
    console.log("Hello world")
}
// function run successfully without initialization bcs of hoisting but "function expression does not runs*"

// --------------------


console.log(a) // undefined but note that it also runned bcs of hoisting and didnt throw any error
var a = 10;
console.log(a) // 10


// --------------------


try {
    console.log(b) // ReferenceError: Cannot access 'b' before initialization
} catch (err) {
    console.log(err)
}
let b = 10;



// --------------------


try {
    console.log(c) // ReferenceError: Cannot access 'c' before initialization
} catch (err) {
    console.log(err)
}
const c = 20;

// hence let and const will throw error in this case but var does not