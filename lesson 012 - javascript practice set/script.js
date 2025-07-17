// problem 3 
function mean(a, b, c, d) {
    return (a + b + c + d) / 4
}
let a = Number(prompt("enter number 1"));
let b = Number(prompt("enter number 2"));
let c = Number(prompt("enter number 3"));
let d = Number(prompt("enter number 4"));

console.log("the mean of 4 number is " , mean(a, b, c, d))

console.log("the mean of 4 number is " + mean(a, b, c, d))

alert("the mean of 4 number is " + mean(a, b, c, d))


// note  :

// alert function only takes one argument not infinite like console.log

// console.log("the mean of 4 number is ", mean(a, b, c, d))
// that is why we used , in console.log

// alert("the mean of 4 number is " + mean(a, b, c, d))
// but + in alert