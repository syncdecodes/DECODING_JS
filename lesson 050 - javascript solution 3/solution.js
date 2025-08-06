console.log("javascript exercise 3 (tell me a joke)")
document.title = "jokes-site"
let jokes = [`Parallel lines have so much in common.
Its a shame theyll never meet.`,

`What do you call fake spaghetti?
An impasta.`,

`I told my wife she was drawing her eyebrows too high.
She looked surprised.`,

`Whats orange and sounds like a parrot?
A carrot.`,

`I used to play piano by ear…
Now I use my hands.`,

`Why cant your nose be 12 inches long?
Because then it would be a foot.`,

`What do you call a fish wearing a bowtie?
Sofishticated.`,

`Im reading a book on anti-gravity.
Its impossible to put down.`,

`Why did the scarecrow win an award?
Because he was outstanding in his field.`]


let random = Math.floor(Math.random(0, jokes.length) - 1)
console.log(random)


happyjokes.innerHTML = jokes[random].happyjokes