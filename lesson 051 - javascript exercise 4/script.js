console.log("clock using javascript..")

let a = new Date()
let y = a.getFullYear()
let d = a.getDate()
let h = a.getHours()
let m = a.getMinutes()
let s = a.getSeconds()
console.log(y, d, h, m, s)

console.log(new Date())
console.log(new Date(). toDateString())
console.log(new Date(). toTimeString())

document.title = "Time"
let Newtime = document.getElementsByClassName("time")[0]
setInterval(function(){
    let a = new Date()
    Newtime.innerHTML = a
},1000)

   


