console.log("javscript intro to promises")

/* => the solution to callback hell is promises -:
 promise is a promise of code execution - the code either executes either fails in both the cases the user will be notified */

 // => promise

 let promise = new Promise(function(resolve, reject){
    alert("hello five")
    console.log("hello four")
    resolve(56)
 })
 console.log(Promise)

 console.log("hello one")
 setTimeout(function(){
    console.log("hello two")
 }, 3000)
 console.log("hello three")



 