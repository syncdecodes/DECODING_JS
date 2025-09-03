console.log("Local storage")
let key = prompt("Enter key you want to set")
let value = prompt("Enter value you want to set")
localStorage.setItem(key, value)
console.log(`The value of ${key}is ${localStorage.getItem(key)}`) 

// ${key} will give the key and ${localStorge.getItem(key)} will give the value 


