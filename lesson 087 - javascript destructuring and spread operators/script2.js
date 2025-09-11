let { a, b } = { a: 1, b: 2 }
console.log(a, b)

const obj = { c: 3, d: 4 }
const { c, d } = obj
console.log(c, d)
console.log(obj)

// Spread operators -:
const arr = [9, 8, 7]
const object = { ...arr }
console.log(object) // with keys or say index val
console.log(typeof arr) // object 


function sum(n1, n2, n3) {
    return n1 + n2 + n3
}

console.log(sum(1, 2, 3)) // 1 + 2 + 3 = 6
console.log(sum(...arr)) // 9 + 8 + 7 = 24


let obj2 = {
    Name: "Dev",
    company: "company xyz",
    age: 17
}
console.log(obj2)
console.log({...obj2})
console.log({...obj2, age: 18})