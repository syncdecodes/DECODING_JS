console.log("operators in js -:")
console.log("1) arithmetic operators ")
let a = 50;
b = 2
console.log(a + b)

console.log("a**b = ", a ** b)
/*  ** means exponentiation means if a is 10 and b is 4 the a**b means 10 raise to the power 4 or 10*10*10*10 */

console.log("a % b = ", a % b)
// modulos tells remainder

console.log("a++ =", a++)
console.log(a)
// increment operator a++ increases the value of a by one but will return 10 only but will return 11 after console.log(a)

console.log("b++ =", b++)
console.log(b)


let c = 5;
let d = 15;

console.log(++c)
console.log(++d)
// will directly return 6 and 16 as we have used the increment function before
// same with decrement operator

console.log("2) assignment operator")

let z = 1;
z += 5; // is same as z = z + 5
// similarly(-=, *=, /=, %=, **=)


/* comparison operators*/

let dev = 5.9;
let sakshi = 4.9;
let sia = 5.9;
let krish = "cricketer"
let gaurav = "cricketer"


// equals to (==) only checks the value 

console.log("dev == sia is" , dev == sia)
console.log("dev == sakshi is ", dev == sakshi )

// not equals to (!=) 

console.log("dev != sia is" , dev != sia)
console.log("dev != sakshi is ", dev != sakshi )

// equals value and type of (===)

console.log("krish === gaurav is", krish === gaurav)
console.log("sakshi === krish is", krish === sakshi)

// rest are greater than 
// greater than equals to
// smaller than
// smaller than equal to
// and ternary operator



// logical operator -:

let x = 5;
let y = 6;

console.log(x<y && x==5)

// (&&)if both te condition satisfies then true if any of them is wrong then false

console.log(x<y || x==6)

// (||) if any one of the condition satisfies then true

console.log(!false) // returns true 
console.log(!true ) // returns false

console.log( 7 + 8 )
// here 7 and 8 are operands + is operator and 15 is the result 