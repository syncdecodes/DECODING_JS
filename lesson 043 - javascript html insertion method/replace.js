let a = document.getElementsByClassName("container")[0]

console.log(a)

let b = document.createElement("h1")
b.innerHTML = "<h1>hello world!</h1>"

// document.body.append(b) // hello world! at last of html page

// a.append(b) // hello world! at last in div.container 

// a.prepend(b) // hello world! at the beggining of div.container

// a.before(b) // hello world! before the div.container tag

// a.after(b) // hello world! after the div.container tag

// a.replaceWith(div) // replaces node with the given mode 