console.log("tutorail on javacsript html insert adjacent HTML/Element/text")

let a = document.getElementsByClassName("craft")[0]
console.log(a)

a.insertAdjacentHTML("beforeend", "<h2>minecraft build anything - I am beforeend</h2>") // minecraft build anything on the html page just before ending of div.craft tag

a.insertAdjacentHTML("beforeBegin", "<h1>lets build something - I am beforeBegin</h1>") // before div.craft tag

a.insertAdjacentHTML("afterBegin", "<div>minecraft is better than lokicraft - I am afterBegin</div>")

a.insertAdjacentHTML("afterEnd", "<div>smash millions of block - I am afterEnd</div>")

// a.remove() // removes the div.craft tag and its html from html page and bom