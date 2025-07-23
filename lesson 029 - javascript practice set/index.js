console.log("javascript practice set")

let age = Number(prompt("enter your age"))

if (isNaN(age)){
    alert("invalid input, try enetreing a number")
}

else if (age < 0){
    alert("hey man you are still not born yet")
    console.error("invalid age")
}

else if (age >= 18){
    alert ("you can drive")
    document.write("you are egligeble for driving")
}

else if (age >= 100){
    alert("hey man you are immortal")
    document.write("you should fly")
}

else {
    alert("you cant drive")
    document.write("you are not egligeble for driving")
}

// isNaN means (is Not a Number) we cant simply write age != Number because we have already converted age into a number from a sting 

let a = confirm("do you want to check the prompt again?")
if (a){
    age = Number(prompt("enter your age"))
    if (isNaN(age)){
    alert("invalid input, try enetreing a number")
}

else if (age < 0){
    alert("hey man you are still not born yet")
    console.error("invalid age")
}

else if (age >= 18){
    alert ("you can drive")
    document.write("you are egligeble for driving")
}


else if (age >= 100){
    alert("hey man you are immortal")
    document.write("you should fly")
}

else {
    alert("you cant drive")
    document.write("you are not egligeble for driving")
}

}

else {
    
}

let num = Number(prompt("enter a number hint try entering number greater than 40 you will be redirected and enter lesser value for a surprise.."))
if (num > 40){
    location.href = "https://google.com"
}
else {
    color = prompt("enter a color name to color your website")
    document.body.style.background = color
}