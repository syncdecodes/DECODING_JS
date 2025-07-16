document.title = "switch"

let days = prompt("how many days are in a week")
console.log(days)
console.log(typeof days) // it will return string 



let monthdays = Number(prompt("how many days are in february leap year"))
console.log(monthdays)

console.log(typeof monthdays)  // it wil return number



// switch -:



let age = prompt("what is your age ")
age = Number.parseInt(age)
console.log(age)

console.log(typeof age)  // it will return number

let xage = Number(prompt("what is your xage"))
switch(xage){
    case "12":
    alert("your age is 12")
    break
      case "13":
    alert("your age is 13")
    break
      case "14":
    alert("your age is 14")
    break
      case "15":
    alert("your age is 15")
    break
      case "16":
    alert("your age is 16")
    break
      case "17":
    alert("your age is 17")
}

// use break so that all the cases wont return at once

/* means when we use prompt it returns string and we can chane it to number using -:
Number.parseInt()
       or 
simply coding Number(prompt("xyz....."))       
*/



let num = Number(prompt("enter a number"))
if (num % 2 == 0 && num % 3 == 0 ){
    alert ("your number is divisible by 2 and 3 both")
}
else if (num % 2 != 0 && num % 3 != 0 ){
      alert ("your number is not divisible by 2 and 3 both")
}


let number = Number(prompt("enter a number"))
if (number % 2 == 0 || number % 3 == 0 ){
    alert ("your number is divisible by 2 or 3 may be both")
}
else{
      alert ("your number is not divisible by 2 and 3 both")
}

let height = prompt("what is your height")
let z = height > 6 ? "you can drive " : "you cant drive"
alert (z)
console.log(z)


