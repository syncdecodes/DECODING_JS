console.log("tutorial on map filter reduce")

let array = ["dev", "sia", "sakshi", "krish"]

console.log(array)
console.log(array.toString())

// map() -: "creates a new array" by performing some opertaiion on each array element.

let arr = [1, 2, 3, 4, 5]

let a = arr.map((value, array, index) => {
    console.log(value, array, index)
    return value * 2
})
console.log(a)


// for_each loop is differnt from map function because map creates a new array wheras for_each doesn't 


// filter -: filters an array with values that passes a test "creates a new array"
let array1 = [12, 13, 14, 15, , 16, 10, 9, 8, 7, 6, 5, 20, 25, 1, 2]

let b = array1.filter((value) => {
    console.log(value) // returns the elements of array1 
    return value > 10
})

console.log(b)



// reduce -: this functions reduces an array to a single value 

let array3 = [9, 8, 7, 6, 5, 4, 3, 2]

let arr3 = array3.reduce((a, b) => {
    return (a - b)
})
let arr4 = array3.reduce((a, b) => {
    return a + b
})
console.log(arr3, arr4)



// hence 
// reduce functin returns a value
// map function returns an array
// filter function also returns an array

