console.log("tutorial on array loops")
// first we must learn the format of classical for loop  -:
/*     for (let index = 0; index < array.length; index++) {

 }     */

let number = [1,2,3,4,5,6,7]


console.log("for_loop")

for (let index = 0; index < number.length; index++) {

   console.log(number[index])

}


console.log("for_each loop")

number.forEach(element => {

    console.log(element*2)

});


console.log("array.from")  
// array.from() is used to convert a string into an array

let names = 'dev'
console.log(Array.from(names))

let myname = "sakshi"
let na = Array.from(myname)
console.log(na)


console.log("for_of loop")

for (const element of number) {
    console.log(element)
}


console.log("for_in loop")

for (const key in number) {
 
console.log(key) // will return key (index number)
console.log(number[key]) // will return elements 


}
// note that key in arrays generally means respective index number and object are the elements of that array