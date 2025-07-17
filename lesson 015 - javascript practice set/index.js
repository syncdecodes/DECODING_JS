console.log("prtactice set on strings")
 let obj = "har\""
 console.log(obj.length)

 const sentence = 'the quick brown fox jumps over the dog'
 const word = 'fox'
 console.log(sentence.includes(word))
//  console.log('the word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence');


console.log("learning starts with and ends with")

const str1 = "Saturday night plans";

console.log(str1.startsWith("Sat"));
// Expected output: true

console.log(str1.endsWith("s"));
// Expected output: true


const mon1 = "monday party ready?"

console.log(mon1.startsWith("mon")) // true

console.log(mon1.endsWith("ady?")) // ture 

console.log(mon1.startsWith("mno")) // false 

console.log(mon1.endsWith("Ady")) // false 

// note that javascript is case sensitive 

let object = "please give rupees 1000"
let amount = object.slice("please give rupees ".length)
amount = Number.parseInt()

console.log(amount)
console.log(typeof amount)
//       or
console.log(object.slice(19,23))
//       or 
console.log(object.slice("please give rupees ".length))
//       or 
console.log(object.slice(19))

let myfriend = "sakshi"
console.log(myfriend.replace("hi" , "ham"))


// we can do it like this check below -:

myfriend[3,4] = "ham" // because we know that strings are immutable 

// but also it will not throw error bcs javascript is a forgiving language :)


