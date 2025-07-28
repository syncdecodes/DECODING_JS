console.log("tutorial on javascript table based navigation")

let table = document.body.children[1]

console.log(table) // expected output - whole table
console.log(table.rows) // expected output - table rows 
console.log(table.caption) // ecxpected output - table caption
console.log(table.tHead) // ecxpected output - table head
console.log(table.tHead.firstElementChild) // expected output - tr 
console.log(table.tFoot) // ecxpected output - table foot
console.log(table.tBodies) // exepceted output - collectection of <tbody> elements 
console.log(table.rows[0].cells) // :)

console.log(typeof document) // expected output object
console.log(typeof window) // expected output object

