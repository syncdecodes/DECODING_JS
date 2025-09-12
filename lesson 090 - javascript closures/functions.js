// passing function inside function -:

let programmers = function Dev() {
    console.log("Hello dev programmer")
    let P1 = function kikuu() {
        console.log("Hello programmer kikuu")
        let P2 = function Sia() {
            console.log("Hello sia you are not a programmer")
            let P3 = function sakshi(){
                console.log("Hello sakshi you are also not a programmer")
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
// I am an advanced coder thoo ;)


/* 
understanding this syntax is super important ****

// programmers() // Hello dev programmer

// p1 = programmers() // Hello dev programmer
// p1() // Hello programmer kikuu

// P2 = p1() // Hello programmer kikuu
// P2() // Hello sia you are not a programmer

// P3 = P2() // Hello sia you are not a programmer
// P3() // Hello sakshi you are also not a programmer

*/

// --------------

function GM(){
    console.log("Good Morning")
    function GA(){
        console.log("Good Afternoon")
        function GE(){
            console.log("Good Evening")
            function GN(){
                console.log("Good Night")
            }
            return GN
        }
        return GE
    }
    return GA
}
GM()()()()