console.log("tutorial on loops")
console.log("for loop, for in loop, for of loop, while loop, do while loop")



for (let index = 0; index < 50; index++) {
    console.log(index)
}

console.log("developer")

for (let index = 100; index > 50; index--) {
    console.log(index)
}

/*  the syntax of a for loop is -:

for (statement 1 ; statement 2 ; statement 3 ){
code to be executed 
}

statement 1 is executed one time 
statement 2 is the condition based on which the loop runs (loop body is executed )
statement 3 is executed everywhere the loop body is executed  */

console.log("hacker")

for (let index = 0; index < 50; index++) {
    console.log(index + 1)
}

console.log("controller")









// programme to add first n natural number -:

let sum = 0  // its the initial point means the sum will start from here 0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8......

let n = Number(prompt("enter any natural number"))

for (var index = 0; index < n; index++) {
    sum += (index + 1)
}

console.log("sum of first " + n + " natural number is " + sum)

alert("sum of first " + n + " natural number is " + sum)

console.log(index)  // it returns value bcs we used var in forloop which is globally scoped but if we have used let which is block scoped it will throw an error









// factorial programme -:

let product = 1;

let number = Number(prompt("enter a number (positive or negative)"))

if (number > 0) {
    for (let index = 0; index < number; index++) {
        product *= (index + 1)   // is same as product = product * 5

    }
    alert("the factorial of " + number + " is " + product)
}


else if (number < 0) {
    for (let index = 0; index > number; index--) {
        product *= (index - 1)

    }
    alert("the factorial of " + number + " is " + product)
}

else {
    console.log(0)
    alert(0)
}

