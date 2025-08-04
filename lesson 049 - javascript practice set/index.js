console.log("javscript practice set")

let a = document.getElementsByClassName("btn")[0]
let b = document.getElementsByClassName("btn")[1]
console.log(a)
console.log(b)

let x = function(){
    alert("you clicked button 1")
}

let y = function(){
    alert("you clicked button 2")
}

a.addEventListener('click', x)
b.addEventListener('click', y)

let sum = (a, b)=>{
    console.log(a + b)
}
setInterval(sum, 2000, 5, 5)


