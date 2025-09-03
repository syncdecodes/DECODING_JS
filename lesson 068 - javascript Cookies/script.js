console.log("Javascript Cookies")
console.log(document.cookie)
document.cookie = "github mail = syncdecodes@gmail.com" // set call
document.cookie = "discord mail = syncdecodes@gmail.com" // set call
let key = prompt("Type name") 
let value = prompt("Enter your name")
document.cookie = `${ encodeURIComponent (key)} = ${ encodeURIComponent (value)}` // known as set call
console.log(document.cookie)
console.log(decodeURIComponent())




// when data from the user includes (;) or something like this it does not get added in the cookie data hence to solve this we use encodeURIComponent which encodes the unreadable special character and then to get the exact data what the user has stored we use; decodeURIComponent("copy_paste_the_encoded_code") in console - I hope you got it :)

// # Note Cookie just keep on adding