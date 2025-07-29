console.log("tutorial on javascript matches, closest and contains")

// MATCHES

/* console.log(id1)
console.log(id2) */
// expected output -:
// it will access both the div in html
// this is the most simple way to access any element in html but its not a good practice bcs it works only in modern browsers like chrome.. and may create difficulties in firefox, opera and more....

let Id1 = document.getElementById("id1")
console.log(Id1)
console.log(Id1.matches(".class"))  // expected output false
console.log(Id1.matches(".box")) // expected output true 
let Id2 = document.getElementById("id2") 
console.log(Id2.matches(".box")) // expected output true 
console.log(Id2.matches(".boxes")) // expected output false 

// CLOSEST - looks for the closest ancestor 

let Span = document.getElementById("sp1")
console.log(Span.closest(".box"))

let nav = document.getElementsByClassName("nav")
console.log(nav)

// CONTAIN 

console.log(Id1.contains(Span)) // expected output true 
console.log(Id1.contains(sp1)) // expected output true 
console.log(Span.contains(Span)) // expected output true 

// while using functions like matches closest and containe try to use id selector most of the time 