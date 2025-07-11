console.log("lesson on primitive data types")

console.log("null, number, boolean, bigint,  string, symbol, undefined")

let a = null;
let b = 90;
let c = true; // or false 
let d = BigInt("581") + BigInt("9")
let e = "dev"
let f = Symbol("I am a symbol")
let g = undefined;
let h // it has no value so it is also undefined

console.log(a, b, c, d, e, f, g, h)

// to know printmitive data types -:
console.log(typeof a, typeof b, typeof c , typeof d , typeof e , typeof g , typeof h)


// objects in js

let items = {
    "sakshi": false,
    "sia": true,
    "dev": 21,
    "developer": null
}
console.log(items["sia"])