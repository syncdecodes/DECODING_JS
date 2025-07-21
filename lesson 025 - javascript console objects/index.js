console.log(console) // expected output : returns all the consoles 

console.assert(5 > 2) // if the condition is true the nothing happens but in case its wrong then it will throw an error 


let object = {
    dev : 50,
    krish : 60,
    gaurav : 70,
    harshita : 80
}
console.table(object) // prints the object and keys in a table format


console.warn("dont use console.clear it will clear all the code in the terminal; open browser and inspect it to go more deep.") // warns you by highlighting -: ("dont use console.clear it will clear all the code in the terminal; open browser and inspect it to go more deep.") it by yellow color  


console.error("hi i am an error can you detect me") // throws an error by highlighting -: ("hi i am an error can you detect me") it by red color 


console.info("hey this is an important information dont miss it") // console.log() and console.info() are similar both info and log are showed in specific info section


console.time("forlop")

for (let index = 0; index < 5001; index++) {
    console.log(index + 1)
}

console.timeEnd("forlop")

// console.clear()
// clears all the code in the the terminal