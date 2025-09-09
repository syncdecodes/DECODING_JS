const employee = {
    // creating method in an object - 1
    calcTax() {
        console.log("Tax rate is 10%")
    }
}
console.log(employee)
console.log(employee.calcTax)
console.log(employee.calcTax())

// ---------

const employee2 = {
    // creating method in an object - 1
    calcTax2: () => {
        console.log("Tax rate is 20%")
    }
}
console.log(employee2)
console.log(employee2.calcTax2)
console.log(employee2.calcTax2())

// Same output in both case
