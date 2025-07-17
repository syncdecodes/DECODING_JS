let girl = "      kiku      "
let friend = "hacker"
let names = "Developer"
console.log(names.length)

console.log(names.toLowerCase())
console.log(names.toUpperCase())
// toLowerCase and toUpperCase are function thats why we used ()

console.log(names.slice(2,7)) // will return velop {2nd letter included but 7th not included} [means in slice(x,y) x is included but y is excluded]

console.log(names.slice(1)) // will return eveloper {means it will start from index 1 and print till end}

console.log(names.replace("eloper" , "_sigma"))

console.log("when", names.concat(" meets"), friend , "'hacker accepts his fate ")

console.log(girl.trim()) // removes all the excess spaces 
console.log(girl)



let girl2 = "shivika"
for (let index = 0; index < girl2.length - 6; index++) {
    console.log(girl2[0])
    console.log(girl2[1])
    console.log(girl2[2])
    console.log(girl2[3])
    console.log(girl2[4])
    console.log(girl2[5])
    console.log(girl2[6])
   
    
}



// we can also conactinate like this -:

let concat = "shiviaka"  +  "dev"
console.log(concat)



// imp note : strings are immutable they cant be changed 
