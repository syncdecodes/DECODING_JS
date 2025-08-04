console.log("handling browser events")

let x = function(e){
    console.log(e)
    console.log(e.type, e.clientX, e.clientY)
    alert("first click")

    // type = click, client = user ne kha pe x and y axis pe touch kia 
}

let y = function(e){
    console.log(e.target)
    alert("second click")
}

let z = function(){
 
    alert("third click")
}

let a = document.getElementById("btn")
console.log(a)

a.addEventListener("click", x)
a.addEventListener("click", y)

// let Num = Number(prompt("enter a number (hint enter = 12)"))
// if (Num == 12){
//     a.removeEventListener("click", x)
// }
// else if (Num < 10){
//     a.addEventListener("click", z)
// }
// else {
            
// }
            
// make functions to be a professional :)
            
 // uncomment it to run thr code 

 /* imp check its bom (console) to understand the code */

