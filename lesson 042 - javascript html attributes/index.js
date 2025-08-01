console.log("javascript tutorail on html attributes methods")

let b = document.getElementsByClassName("hello")[0]
console.log(b)
b.style.color = "red"

/* using atributes */

let a = world.getAttribute("class")
console.log(a) // expected output = div tag class name (hello)

console.log(world.hasAttribute("class")) // we are asking whether div tag has class or not ; as it has expected output - true

console.log(world.hasAttribute("style")) // true

let c = world1.getAttribute("class")
console.log(c)
world1.setAttribute("hidden","true") // html is now hidden on bom and html page both.
world1.setAttribute("class", "kiku dev") // class will be changed to kiku and dev in browser not in html code 

let mine = document.getElementById("mine")
console.log(mine)
console.log(mine.getAttribute("class"))

// mine.removeAttribute("class") // removes the class

console.log(mine.attributes) // instance for NameNodeMap  