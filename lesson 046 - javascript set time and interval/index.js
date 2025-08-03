console.log("javascript tutorial on set interval and set timeout")

// setTimeout allows to run a function once after the interval of time

// alert("minecraft") // instant alert - minecraft

// let a = setTimeout(function () {
//     alert("I am inside setTimeout")
// }, 4000) 

// 4000 means 4000 milisecond or 4 seconds 

// clearTimeout(a) 
/* expected output let a = setTimeout(function () {
    alert("I am inside setTimeout")
}, 4000) 
this function wont work because we used clearTimeout(a)*/

// console.log(a) // expected output 1 

let sum = (a, b) =>{
    console.log(a + b)
}
setTimeout(sum, 2000, 2, 3) // expected output - 5 after 2 seconds 

// let x = setInterval(function(){
// alert("I am inside set interval")
// }, 2000) // expected output - alert("I am inside set interval") after every 2 seconnds 

// clearInterval(x)
/* expected output - let x = setInterval(function(){
alert("I am inside set interval")
}, 2000) "wont work" */ 

let sub = (a, b, c)=>{
    console.log(a - b - c)
}
// setInterval(sub, 2000, 10, 2, 4) // expected output = 10 - 2 - 4 after every 2 seconds in console 

