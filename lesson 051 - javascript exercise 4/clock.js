document.title = "Time"
let Newtime = document.getElementsByClassName("time")[0]
setInterval(function(){
    let a = new Date()
    Newtime.innerHTML = a
},1000)
