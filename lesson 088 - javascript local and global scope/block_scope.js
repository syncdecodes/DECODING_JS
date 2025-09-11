console.log("Javascript local and global scope")
console.log("JS has three type of scopes")
console.log("block scope (local - scope)")
console.log("funnction scope (local - scope)")
console.log("global scope")

let a = 8;
console.log(a) // 8
a = 10;
console.log(a) // 10

var b = 8;
console.log(b) // 8 
b = 10;
console.log(b) // 10


// block scope ------------- let and const provide black level scope which means thst the variables declared inside a {} cant be accessed from outside the block
{
    let c = 2;
}
try {
    console.log(c)
} catch (err) {
    console.log(err) // ReferenceError: c is not defined bcs let is block scoped
}



// global scope -------------
{
    var d = 2;
}
console.log(d) // 2

