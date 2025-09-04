// 1
console.log("callbacks - A callback is a function passed as an argument to anotHer function.")

function sum(a, b) {
    console.log(a + b);
}

function calculator(a, b, sumFunc) {
    sumFunc(a, b)  // 3
}

calculator(1, 2, sum)
// => or 
calculator(1, 2, (a, b) => {
    console.log(a + b) // 3
})

// 2
console.log("creating function using variables -:")

let Hello = () => {
    console.log("Hello dev")
}

Hello() // calling functions      
setTimeout(Hello, 2000)

const Hey = ()=> {
console.log("Hey dev")
}

Hey() // calling functions    

// => Just trying.. callbacks

function Data(){
    console.log("Hey Data")
}

function GetData(DataId){
    console.log("How are you Data")
    if (DataId){
        DataId();
    }
}

GetData(Data)

// Got what I wanted :)