console.log("tutorial on javascript  accessing children in html using dom")
document.title = "learning DOM"

console.log("hello world")

console.log(document.body)

console.log(document.body.childNodes)

console.log(document.body.childNodes[0]) 

console.log(document.body.childNodes[1])

console.log(document.body.childNodes[2])

console.log(document.body.childNodes[3])

console.log(document.body.childNodes[1].childNodes)
// means childNode 1 which is div.container ke childNodes which are div.boxes....

/* note - ChildNodes means elements that are direct children
=> for eg head and body are children of <html> */


let contain = document.body.childNodes[1]

console.log(contain.firstChild)
console.log(contain.lastChild)
// the first and last child is text and not div.boxes because text Nodes is also a child which is the "gap" 



// note that text Node is a child but not an element thats why when we use first element child it gets ignored

/* in every programming language counting starts from 0 */



// if we want that the first and last child of div.container will be div.boxes and not text then we can use this which directly shows the element present insilde not the text Node -:

console.log(contain.firstElementChild)
console.log(contain.lastElementChild)


// now by using this we can target elements to manipulate html using javascript 


console.log(contain.firstElementChild.style.color = "red")

console.log(contain.firstElementChild.style.backgroundColor = "yellow")

console.log(contain.firstElementChild.style.fontSize = "1.5rem")




// we learned how to target child elements now lets target parent elements and node -:

console.log(contain.lastElementChild.parentElement) // only return parent elements 

console.log(contain.lastElementChild.parentNode) // it will return text and comment node also if any





// now lets learn to target any element in the html and not just the first and last child and child elements 



console.log(document.body.firstElementChild.childNodes)


/* (childNodes) this will give all the childs of firstElementChild (div.container) including textNodes, commentNodes, and all the elements */ 


console.log(document.body.firstElementChild.children)

/* (children) this will only give the elements of firstElementChild (div.container) means div.boxes */ 


// now lets target these elements individually -:

console.log(document.body.firstElementChild.children[0])

console.log(document.body.firstElementChild.children[1])

console.log(document.body.firstElementChild.children[2])

console.log(document.body.firstElementChild.children[3])



// we can also target elements next and previous siblings for eg -:

// div.boxex box 3 ka next sibling is box 4 and previous is box 2 

// note that simply using previous sibling will include text and commented Nodes 

// to target the elements we have to use nextElementSibling and previousElementSibling

// here is how we can do -:

console.log(document.body.firstElementChild.children[2].nextSibling)

console.log(document.body.firstElementChild.children[2].previousSibling)

console.log(document.body.firstElementChild.children[2].nextElementSibling)

console.log(document.body.firstElementChild.children[2].previousElementSibling)


