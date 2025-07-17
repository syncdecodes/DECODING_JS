console.log("tutorial on strings")
// anything inside double or single code is a string example - "sneha", 'radhika'

let a = "sneha"
console.log(a)
console.log(a.length)  // (double code)length of sneha is 5 (5 letters)

let b = 'dev'
console.log(b)
console.log(b.length)  // (single code)will work same like above 

// let c = "sakshi' dont do this it will throw an error 

// access to strings -:

console.log(a[0]) // returns 1st letter of the word sneha 
console.log(a[1]) // returns 2nd letter of the word sneha 
console.log(a[2])
console.log(a[3])
console.log(a[4])

// modern javascript (template literals) using backticks 

let boy1 = "arun"
let boy2 = "karan"
let sentence1 = `boy1 is friend of boy2`
let sentence2 = `${boy1} is friend of ${boy2}`
console.log(sentence1) // this will return boy1 is friend of boy2 
// so to insert variabe use sentence2 -:
console.log(sentence2)

// we can insert variables directly in templates lierals this is called string interpolation

// escape sequence characters -:

let fruit = 'bana\'na'
console.log(fruit)
console.log(fruit.length)  // will return 7 not 6 because \' is also counted asa character

let fruit2 = 'bana\nna'
console.log(fruit2 )  // \n breaks a line 

let fruit3 = 'bana\tna'
console.log(fruit3)


let fruit4 = 'bana\rna'
console.log(fruit4)

let fruit5 = 'man\rgo'
console.log(fruit5)

// \r leaves first 2 character and prints the remaining