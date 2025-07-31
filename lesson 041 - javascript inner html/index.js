console.log("javascript tutorial on inner html")
document.title = "inner HTML"

let html = document.getElementsByTagName("div")[0]

console.log(html) // will return <div>hey I am a div tag</div>
// consoel.log shows the element dom tree 

console.dir(html) // expected output - div tag as a object
// console.dir shows the element as a object with its properties 

console.log(document.body.firstChild.nodeName) // expected output #text

console.log(document.body.firstElementChild.nodeName) // expected output DIV

console.log(first.innerHTML)
// inner html is valid only for element nodes and it allows to get the html inside the element as a string 
console.log(first.outerHTML)
// outer html proprty contains the full html inner html + the element itself.

console.log(document.body.firstChild)
console.log(document.body.firstChild.data)
console.log(document.body.firstChild.nodeValue)
console.log(document.body.textContent) // whole html text

let div = document.getElementsByClassName("div")[0]
// console.log(div.hidden = false) // now the text is again visible on html page 