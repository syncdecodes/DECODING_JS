let obj = {
    harry: 90,
    anita: 80,
    sneha: 60,
    krish: 50
}
for (const name in obj) {
    console.log("marks of " + name + " are " + obj[name] )
}
// here we used forin loop


// Q1
let a = Number(prompt("enter the only even prime number"))

if (a == 2){
    alert("your answer is right!")
    console.log("your answer is right!")

}

else {
    alert("try again")
    console.log("try again")
}

// Q2
let number = 21;
let i;
while(i != number){
    i = Number(prompt("enter a number"))
    alert("try agin")
}
console.log("you have entered the correct number")