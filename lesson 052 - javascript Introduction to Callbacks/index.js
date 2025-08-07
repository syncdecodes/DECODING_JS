console.log("javascript intro to callbacks")

// => Synchronus programming - line wise 
let a = prompt("what is your name?")
let b = prompt("what is your age?")
let c = prompt("what is your favorite color?")
console.log(a +" is " + b + " years old and his/her fav color is " + c)
alert(a +" is " + b+ " years old and his/her fav color is " + c)

// => Asynchronus programming - start, end, what is you birthday date?
alert("start")
setTimeout(function(){
    d = prompt("what is your birthday date?")
}, 2000)
alert("end")