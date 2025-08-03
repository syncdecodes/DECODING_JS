console.log("browser events")
// event - something has happened 
document.title = "browser events"

let a = document.getElementsByClassName("craft")[0]

a.onclick = function(){
    alert("you clicked me ")
}

a.onmouseenter = function(){
    console.log("my bg color is red")
}