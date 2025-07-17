let a = 1;
let b = 2;
let c = 3;

console.log("done")
console.log("average of sum of a and b is ", (a + b) / 2)

console.log("done")
console.log("average of sum of b and c is ", (b + c) / 2)

console.log("done")
console.log("average of sum of a and c is ", (a + c) / 2)

// using function to do the same thing -:

function average(x, y) {
    console.log("done")
    return Math.round((x + y) / 2) // Math.round just rounding off :)
   
}

let p = 1;
let q = 2;
let r = 3;

console.log("average of sum of p and q is ", average(p, q))
console.log("average of sum of q and r is ", average(q, r))
console.log("average of sum of p and r is ", average(p, r))