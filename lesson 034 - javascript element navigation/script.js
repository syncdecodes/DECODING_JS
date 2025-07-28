console.log("javascript tutorial on dom element navigation")
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