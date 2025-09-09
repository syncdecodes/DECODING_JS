console.log("We can add one object's method to another object using .__proto__")

const Tax = {
    calcTax() {
        console.log("Tax rate is 10%")
    }
}
console.log(employee)
console.log(employee.calcTax)
console.log(employee.calcTax())

const Dev = {
    NetWorth: 10000
}
Dev.__proto__ = Tax;
console.log(Dev) /* Expected output -:

{NetWorth: 10000}
NetWorth: 10000
[[Prototype]]: Object
calcTax: ƒ calcTax()
[[Prototype]]: Object

we added a prtoto type (object method) in Dev 
 */ 

