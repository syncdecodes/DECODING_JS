console.log(document.body.childNodes)  // this is a node list. which looks like array but isn't an array.

// to convert (document.body.childNodes) into an array -:

let arr = Array.from(document.body.childNodes)
console.log(arr)