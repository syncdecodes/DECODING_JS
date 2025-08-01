console.log("javascript tutorial on html insertion methods")

let a = document.getElementsByClassName("craft")[0]
console.log(a)

console.log(a.innerHTML + " hello world ") // expected output - in bom console - have you ever played minecraft?? hello world



a.innerHTML = a.innerHTML + "<h1>Hello world!</h1>"

// we can also do it by creating an element -:

let b = document.createElement("div");
b.innerHTML = "<h2>lets play minecraft devplays</h2>";

// we created a <h2> tag noe we have to insert it in the html body -:

a.appendChild(b) // expected output div tag will be added in the b/w

// document.body.append(b) // expected output div tag will be added to html in the body at last