console.log("javascript tutorial on alert, prompt, and confirm")


// prompt and alert -:
alert("what is your name?")
let a = prompt("enter your first name here")
// a = Number.parseInt(a)
alert("your entered value type is : " + (typeof a))
document.write(a)  // it will print the value you enter in prompt. in th html

// to get a default value in prompt -:

let b = prompt("what is your last name here ", " dev")
document.write(b)

// confirm -:
let c = confirm("are you 18 +")
if (c){
    let d = prompt("which car do you want do drive")
    document.write(d)
}
else {
    alert ("you cant drive")
}