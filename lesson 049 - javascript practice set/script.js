console.log("glowing bulb effect")

let a = document.getElementsByClassName("bulb")[0]
console.log(a)
setInterval(function(){
a.classList.toggle("bulb")
}, 500.0)