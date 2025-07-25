// => this topic is already covered in the previous lesson (lesson number 32)
// but for your sake I will copy paste the code here once again -:

// targeting parents using dom -:
console.log(contain.lastElementChild.parentElement) // only return parent elements 

console.log(contain.lastElementChild.parentNode) // it will return text and comment node also if any

// targeting siblings using dom -:
console.log(document.body.firstElementChild.children[2].nextSibling)

console.log(document.body.firstElementChild.children[2].previousSibling)

console.log(document.body.firstElementChild.children[2].nextElementSibling)

console.log(document.body.firstElementChild.children[2].previousElementSibling)
