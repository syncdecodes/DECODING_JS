console.log("Local storage")
let clear = document.querySelector(".clear")
console.log(clear)
let clear2 = document.querySelector(".clear2")
console.log(clear2)

let key = "color1"
 localStorage.setItem(key, "red")
localStorage.setItem("color2", "yellow")
localStorage.setItem("color3", "green")
localStorage.setItem("color4", "blue")
localStorage.setItem("color5", "black")

console.log(localStorage)
console.log(localStorage.length) 

document.cookie = "colour1=red"
document.cookie = "colour2=yellow"
document.cookie = "colour3=blue"
document.cookie = "colour4=green"
document.cookie = "colour5=black"

console.log(document.cookie)


clear.addEventListener("click", ()=>{
    localStorage.clear()
})
clear2.addEventListener("click", ()=>{
    localStorage.removeItem(key)
})


// => Note : both key and values must be string 
// => We can use the two JSON methods to objects in localStorage 
// => JSON.stringify(object)
// => JSON.parse(String)




