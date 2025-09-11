console.log("JS destructuring and spread operators")

let arr2 = [1, 2]
let [j, k, l, m] = arr2
console.log(j, k, l, m) // 1 2 undefined undefined


let arr3 = [1, 2, 3, 4, 5, 6]
let [n, o, p, q] = arr3
console.log(n, o, p, q) // 1 2 3 4


let arr4 = [1, 2, 3, 4, 5, 6]
let [r, s, t, u, ...rest] = arr4
console.log(r, s, t, u, rest) // 1 2 3 4 > (2) [5, 6]


let arr5 = [1, 2, 3, 4, 5, 6]
let [v, , , ...restt] = arr5
console.log(v, restt) // 1 > (3) [4, 5, 6]


let arr6 = [1, 2, 3, 4, 5, 6]
let [w, , z, , , ...resttt] = arr5
console.log(w, z, resttt) // 1 3  > [6]