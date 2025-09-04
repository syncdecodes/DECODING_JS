console.log("Callback Hell - Nested callbacks stacked below one another forming a pyramid like structure = Pyramid of Doom")

function getData(DataId) {
    setTimeout(() => {
        console.log("Data", DataId)
    }, 2000);
}
getData() // expected output Data undefined 
getData(1234) // expected output Data 1234

getData(1); // expected oputput Data 1 after 2s 
getData(2); // expected oputput Data 2 after 2s 
getData(3); // expected oputput Data 3 after 2s 

// Senerio - you have to print data one after another => to do this we will use callbacks -:

function Data(num, delay) {
    setTimeout(() => {
        console.log("Your Number is: ", num)
          if (delay) {
            delay(); // <= This is where the next callback (function) is called 
        }
    }, 2000)
}
// Callback hell - Pyramid of Doom
Data(1, () => {
    Data(2, () => {
        Data(3, () => {
            Data(4, () => {
                Data(5);
            })
        })
    })
})
