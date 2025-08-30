console.log("javascript Error object and custom Errors")

try{
    console.log(Dev)
}
catch(error){
    console.log("Error occured" + error)
}

try{
    console.log(Gaurav)
}

catch(error){

    console.log(error.name)// expeected output - ReferenceError
    console.log(error.message) // expectd output - Gaurav is not defined
    console.log(error.stack) /* expectd output - ReferenceError: Gaurav is not defined
    at index.js:11:17 */

}

// => throwing custom errors

try{
let age = Number.parseInt(prompt("what is your age??")) // Number.parseInt ensures that the number enterd by the user is a number and parseInt converts decimal number to integer

console.log(age)

if (age > 150){
    throw new ReferenceError("your age is probably not true")
}
}

catch(age_error){
    console.log("age is invalid" + age_error)
    console.log(age_error.message)
    console.log(age_error.name)
    console.log(age_error.stack)
}