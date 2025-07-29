console.log("tutorial on javascript searching the dom  #targeting elements through id, classes and more..")

console.log(document.body.firstElementChild.childNodes)
console.log(document.body.firstElementChild.children)
console.log(document.body.firstElementChild.children[2].style.color = "green")




//  targeting elements through classes




let mybox = document.getElementsByClassName("boxes")
console.log(mybox)

//  targeting the third div.boxes -:

mybox[2].style.color = "purple";
mybox[2].style.fontSize = "1.3rem";


// targeting the elements through "id" selector which is used when we want to target a "particular element" 


document.getElementById("orange").style.backgroundColor = "orange";


// query selectors 

document.querySelector(".box").style.backgroundColor = "pink";
// now query selecor will automatically targets the very first element having class as box






// to target all the elements having class as box we have to use for loop with query selector -:



console.log(document.querySelector(".box"))
// this wil return the 1st element having class as box



console.log(document.querySelectorAll(".box"))
// this wil return all the element having class as box



document.body.querySelectorAll(".big-boxes").forEach(e => {
    e.style.backgroundColor = "magenta"
})




// targeting elements by tag name -:

console.log(document.body.getElementsByTagName("div"))
/* this will return all the elements having div tags */



// matches closet and contains method -:

let e = console.log(document.getElementsByTagName("div"))

// targeting elements by only name -:

console.log(document.getElementsByName("search"))

// getElementsByName works same like class