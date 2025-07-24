console.log("tutorial on javascript walking the dom")

// there can be three main type of nodes in dom tree -:

/*
element node 
text node 
comment nodes 
*/

console.log("1", document)  // whole html page 

console.log("2", document.documentElement)  // expected output page html tag

console.log("3", document.head)

console.log("4", document.body) // html body tag

let b = document.title = "HEY I AM DEV"

console.log(typeof b)  // expected output "string"

// note that node.js does not support document object model just like alert prompt and confirm 
// so to run and check your code you should use repplit or "visit browser" which is best.
