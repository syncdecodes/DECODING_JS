console.log("Javascript session storage")

// when we use localStorage data survives even when we change tabs but in sessionStorage it gets deleted in the new tab

let random = Math.random()
console.log(random)

sessionStorage.setItem("name", "Dev")

if (random > .95){
    sessionStorage.clear()
}

else if (random > .85 && random <= .95){
sessionStorage.removeItem("name")
}

else {
    sessionStorage.setItem("name", "Dev")
    console.log(sessionStorage.getItem("name"))
}

// So we have 4 types -:
/* setItem(), getItem(), clear(), removeItem() */ 

