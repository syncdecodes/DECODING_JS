console.log("javascript exercise")
// to generate a random number between 0 to 1 -: 
let ran = Math.random()
console.log(ran)




// to generate random numbers between 0 to 100 ;
let random = Math.floor(Math.random() * 100);
console.log(random)





// to generate random numbers between say 50 to 100 we can use min max formula of Math.ramdom -:
let min = 50;
let max = 100;
let randomInt = Math.floor(Math.random() * (max - min + 1)) + min;



// or we can simply write its code -: 
let randomInteger = Math.floor(Math.random () * 51 ) + 50;


// exercise question -:

let number = Math.floor (Math.random() * 100);

console.log("random number between 0 to 100 is" , number)

let a = Number(prompt("enter a number"))

