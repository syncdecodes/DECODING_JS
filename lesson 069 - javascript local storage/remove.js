console.log("Local storage")

let para1 = document.querySelector(".para1")
console.log(para1)
let para2 = document.querySelector(".para2")
console.log(para2)

let key = prompt("Enter key you want to set")
let value = prompt("Enter value you want to set")

localStorage.setItem(key, value)

console.log(`The value of ${key} is ${localStorage.getItem(key)}`) 
para1.innerHTML = `The value of ${key} is ${localStorage.getItem(key)}`

if (value == "red" || value == "yellow" || value == "green" || value == "blue"){
    localStorage.removeItem(key)
}

if (value == 0){
    localStorage.clear() // clears the local storage
}

console.log(`The value of ${key} after conditions is ${localStorage.getItem(key)}`) 
para2.innerHTML = `The value of ${key} after conditions is ${localStorage.getItem(key)}`