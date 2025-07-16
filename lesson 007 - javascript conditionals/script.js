let y = prompt ("hi how are you")  

if (y == "good" ){
    alert("nice")
}
else {
    alert("its okay")
}



// explanation of this code -:

/* let y = prompt ("hi how are you") here we asked the user how are you

if (y == "good" ){
    alert("nice")
}  now here if the user replies good the there will be a alert or say a response from us "nice"

else {
    alert("its okay")
}  if the user says something else the there will be an alert or say response "its okay" */

// example 2 -:

let age  = prompt("what is your age?")
age = Number.parseInt(age) // now a is a number not string

if (age > 0 && age < 5){
    alert("congrats you are egligable for death")
}
else if (age >= 13 && age < 20){
    alert("you are still teen go work hard for your parents")
}
else if (age >= 20 && age < 80){
    alert("you survived")
}
else {
    alert("you are alien")
}

// ternary opertor -:

// condition? expression1 : expression2
// if condition is true the expression1 if not then expression2 


let yourage = prompt("tell your age again")

console.log("you can", (yourage > 18? "drive" :"not drive"))