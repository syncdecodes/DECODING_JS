console.log("Closures")
/*

Closure means:
Function + uska outer (parent) scope ke variables ka access
Chahe outer function execute ho chuka ho, phir bhi inner function uske variables “yaad” rakhta hai. 

*/

// --------------

function outer() {
    let a = 10;

    function inner() {
        console.log(a); // inner ko outer ke variable ka access mil raha hai
    }

    inner(); // direct call kar diya
}

outer();

// -------------- simple example of closures -:

function GM() {
    console.log("Good Morning")
    function GA() {
        console.log("Good Afternoon")
        function GE() {
            console.log("Good Evening")
            function GN() {
                console.log("Good Night")
            }
            return GN
        }
        return GE
    }
    return GA
}
GM()()()()

/* 

Execution flow:

GM() call hua → "Good Morning" print hua
aur return kiya GA function.

Ab GM()() → "Good Afternoon" print hua
aur return kiya GE function.

Ab GM()()() → "Good Evening" print hua
aur return kiya GN function.

Ab GM()()()() → "Good Night" print hua

Closure part -:

Jab GA bana, uske paas GM ka scope tha.

Jab GE bana, uske paas GA + GM dono ka scope hai.

Jab GN bana, uske paas GE + GA + GM ka scope hai.

*/

// -------------- little advanced example of closures -:

let programmers = function Dev() {
    let language = "JavaScript"
    console.log("Hello dev programmer")

    let P1 = function kikuu() {
        console.log("Hello programmer kikuu, using", language)

        let P2 = function Sia() {
            console.log("Hello sia, you are not a programmer, but dev uses", language)

            let P3 = function sakshi() {
                console.log("Hello sakshi, dev + kikuu + sia sab use karte hain", language)
            }
            return P3
        }
        return P2
    }
    return P1
}

P1 = programmers()
P2 = P1()
P3 = P2()
P3()


// we can see that inner functions have access to the outer variable "language" even though outer function has already executed bcs of closures

/* 
Execution flow:

programmers() called

"Hello dev programmer" printed

returned P1

P1 = programmers()

ab P1 ke andar kikuu() function store hai.

P1() call hua

"Hello programmer kikuu" print hua

return kiya P2

P2 = P1()

ab P2 ke andar Sia() function store hai.

P2() call hua

"Hello sia you are not a programmer" print hua

return kiya P3

P3 = P2()

ab P3 ke andar sakshi() function store hai.

P3() call hua

"Hello sakshi you are also not a programmer" print hua


// --------------------


Closure part:

P1 ke paas programmers() ka scope hai.

P2 ke paas P1 + programmers() dono ka scope hai.

P3 ke paas P2 + P1 + programmers() ka scope hai.

Matlab inner functions apne parent functions ke variables + scope ko yaad rakhte hain → closure.


 */

// -----------------

const x = () => {
    let a = 10;
    console.log(a)
    const y = () => {
        let a = 20;
        console.log(a)
        const z = () => {
            let a = 30;
            console.log(a)
        }
        z()
    }
    return y()
}
x()
// x ko call kia a ki value print hui and y return hua then y ko humne already call kar rakha hai toh vo uske a ki value bhi print hui then same with z
// hum return na bhi likhe fir bhi code work karega as we called () but its not a good practice

// ---------------------

function returnFunc() {



    const j = () => {
        let a = 10;
        console.log(a)
        const k = () => {
            let a = 20;
            console.log(a)
            const l = () => {
                let a = 30;
                console.log(a)
            }
            l()
        }
        return k()
    }
    return j()
}
returnFunc()



// -------------


function returnFunc2() {

    const n = () => {
        let a = 10;
        console.log(a)
        const o = () => {
            console.log(a)
            const p = () => {
                console.log(a)
            }
            p()
        }
        a = 999;
        o()
    }
    return n
}
let m = returnFunc2()
m() // 10 , 999, 999 - bcs after n is called it will return and call o() with updated value of a = 999

// closures have many possibilities try and learn :)
