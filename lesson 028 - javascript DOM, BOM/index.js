console.log("tutorial on window object, dom and bom")
// dom - documnet object model
// bom - browser object model

console.log(window) // will return all the window object
console.log(document) // will return all the documnet objcets (HTML)
document.body.style.background = "red"
let b = document.body;
b.firstElementChild.style.fontSize = "1.2rem"
b.firstElementChild.style.fontFamily = "Arial, Helvetica, sans-serif; "

// so simply dom is document object model used to manipulate html body and its style when a user interacts with the website.
// and bom is browser object model which represents additionals provvided by the browser (host enviornment)

// the function alert, prompt, confirm are also a part of bom