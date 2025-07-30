console.log("javascript practice set")

document.getElementsByClassName("list1")[0].style.color = "green";

// when targeting elements through classes we must mention its index number even if there is only one element having unique class



// if there is no tbody in html table then also in browser - inpect - elements it will show tbody bcs of autocorrection 
// but in view page source the code is raw and no autocorrection takes place 

let child = document.body.firstElementChild
console.log(child.children)

child.children[0].style.color = "red"
child.lastElementChild.style.color = "purple"

let magenta = document.getElementById("magenta")
console.log(magenta)
magenta.style.backgroundColor = "magenta"