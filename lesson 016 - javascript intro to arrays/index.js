console.log("tutorial on aarays")
// arrays are variables which can hold more than one value arrays = [] (square bracket)
let array = [90,80,70,60,null,undefined,true,false,"dev_"]
array[1] = 85;  // arrays are mutable so we can change their values 
array[9] = "sia"  // arrays are mutable so we can also add a value 

console.log(array)  // it will return [90,80,70,60] as it is 
console.log(array[2])
console.log(array.length)
console.log(typeof array)  // will return object



let object = ["dev", "kiku", "sakshi", "krish", "gaurav", "vivek"]

for (let index = 0; index < object.length; index++) {

console.log(object)
    
}

for (const key in object) {

console.log("only targeting the keys")    
console.log(object[key])

console.log("lets print keys")
console.log(key)  // will return respective index numbers

console.log("lets print the whole object")
console.log(object)


}