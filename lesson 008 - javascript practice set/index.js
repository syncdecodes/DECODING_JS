document.title = "index"

console.log("practice set on operators and conditionals ")

let age = Number(prompt("what is your age"))

if (age > 10 && age < 20 ){
    alert("your age lies bw 10 and 20")
}
else if (age > 0 && age <= 10){
    alert("you are a child")
}
else if (age <= 0){
    alert("you are an alien")
}
else{
    alert("you are above 20")
}