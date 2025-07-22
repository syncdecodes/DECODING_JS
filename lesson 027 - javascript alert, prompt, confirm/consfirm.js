// confirm -: (OK AND CANCEL)

let e = confirm("hey are you a man?")
if (e){
    alert("bravo! you are a man")
    d = prompt("write an essay on a man")
    document.write(d)
}
else {
    alert("WOMEN!")
    document.write("lets drink coffee and say together WOMEN!")
}


let c = confirm("are you 18 +")
if (c){
    let d = prompt("which car do you want do drive")
    document.write(d)
}
else {
    alert ("you cant drive")
}

/* if (c){
    let d = prompt("which car do you want do drive")
    document.write(d)
} 
this means that if c is true (OK) then do this -:

 let d = prompt("which car do you want do drive")
    document.write(d)

    
*/