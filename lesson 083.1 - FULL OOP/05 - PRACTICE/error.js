console.log("Extra topic Error handling")

let a = 10;
let b = 5;
console.log("a = ", a)
console.log("b = ", b)
console.log("a + b = ", a + b)
console.log("a + b = ", a + b)
console.log("a + b = ", a + b)
console.log("a + b = ", a + b)
try {
    console.log("a + b = ", a + c)
} catch (err) {
    console.log(err); // prints the error in console
}
// Error bcs c is not a variable and bcs of this Error the nxt line of codes wont run to solve this issue we used try catch-:
console.log("a + b = ", a + b)
console.log("a + b = ", a + b)
console.log("a + b = ", a + b)
console.log("a + b = ", a + b)
