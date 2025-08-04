console.log("handling browser events")

let a = document.getElementById("btn")
console.log(a)

a.addEventListener("click",function(){
    alert("you clicked me!! please click me again")
})

a.addEventListener("click",function(){
    alert("you clicked me again")
})



let b = Number(prompt("enter you fav number"))
if (b == "2"){
    a.removeEventListener("click",function(){
    alert("you clicked me again")
})
}  // this wont work so lets make our code work.....