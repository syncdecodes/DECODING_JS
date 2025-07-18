let a = [1, 2, 3, 4, 5];

console.log(a)
console.log(typeof a)

console.log(a.toString())

let b = a.toString()
console.log(typeof b)

console.log(a.join("0"))

console.log(a.pop())  // will return 5 which is the popped element 
// pop takes out the last element from an array
console.log(a)


a[4] = 5;
console.log(a)

console.log(a.push(6))  // will return the pushed element means 6
console.log(a)

console.log(a.pop())
console.log(a)

console.log(a.shift()) // not that it will return the shifted element 
 // shift or say removes the first element means 1
console.log(a)

console.log(a.unshift(0,1))  // it will return the modifie array length 
console.log(a)

delete a[1];
console.log(a)