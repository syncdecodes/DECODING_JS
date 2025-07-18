console.log("tutorial on array methods part 2")



// delete method 

let num = [0, 1, 2, 3, 4, 5, 6, 7]
delete num[0]
console.log(num)

let b = num.toString()
console.log(b)

// note that delete is an operator and it does not effect the length of an array

let number = [11, 22, 33, 44, 55, 66, 77]
let numbers = [111, 222, 333, 444, 555, 666, 777]
console.log(num.concat(number, numbers))





// sort method - it modifies the original array
let marks = [25, 78, 21, 69, 90, 35, 100]
console.log(marks.sort())

// note that sort function sorts alphabatically not by acending or decending order 
// and in alphabitacl order 1 comes first then 2.... 3.... and so on
// so even if the number is 200 it starts with 2 so it comes after 1 





// to sort in ascending order -:

let compare = (a, b) => {
    return b - a
}
let marks2 = [500, 600, 400, 700, 300, 100, 800]
console.log(marks2.sort(compare))

// to sort in descending order -:

let compare1 = (a, b) => {
    return a - b
}
let marks3 = [500, 600, 400, 700, 300, 100, 800]
console.log(marks3.sort(compare1))




// reverse method 

let grades = [1,2,3,4,5]
console.log(grades.reverse())

// splice method 
// (position to add, number of elements to remove, elements to be added)

grades.splice(2,1,9,8)
console.log(grades)

// slice method - does not modiies the original array

let hello = [ 12,13,14,15,16,17]
let newnum = hello.slice(2)
console.log(newnum)

let mello = [ 12,13,14,15,16,17]
let mewnum = mello.slice(1,4)
console.log(newnum)

// slice(x,y) here x is included and y is excluded


