console.log("javascript lesson on var let and const")
// var is globally scoped 
// var can be redeclared means we can see we write var a twice but it didnt throwed any error 


var a = 45;
var a = 60;
console.log(a)
var b = 450;
var c = 500;
var d = 550;

{
    var a = 50;
    console.log(a)
}
console.log(a)



console.log("let is used for modern java -:")
// let is globaly scoped
// let cant be redeclared it will throw error if done so

let e = 45;
e = "developer"
console.log(e)
let f = 450;
let g = 500;
let h = 550;


{
    let e = 50;
    console.log(e)
}
console.log(f)



let random = Math.random()
console.log(random)

if (random <0.6){
    console.log("hi i am dev")
}
else{
    console.log("hi i am sakshi")
}


console.log("lets learn about const")



// const cant be updated nor redeclared
// const must be initialised 

const author = "dev"
console.log(author)
// const author = "sia" wont work like var because it cant be redeclared 
// author = "sakshi" wont work because const is constant