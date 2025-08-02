console.log("javascript tutorial on changing html classes - classNames and classList")

let a = document.getElementById("first")
console.log(a)

a.className = "red mine craft" // now the class of div#first is red not yellow and css and other proprties will apply accordngly.

console.log(a.classList)

console.log(a.classList.remove("craft")) // expected output undefined 

console.log(a.classList) // expected output DOMTokenList(2) ['red', 'mine', value: 'red mine']
// means class - craft is removed

console.log(a.classList.add("minecraft")) // undefined

console.log(a.classList) // DOMTokenList(3) ['red', 'mine', 'minecraft', value: 'red mine minecraft']

console.log(a.classList.toggle("mine")) // toggle means - agar class hai toh use remove kar do nhi hai toh add kar do - mine is a class so it is removed 
// expected output - false 

console.log(a.classList.toggle("craft")) // expected output true means craft is added as a class in div#first

console.log(a.classList)

console.log(a.classList.contains("red")) // true 
console.log(a.classList.contains("black")) // false
