console.log("Practical example")

const taxrate = {
    empTax(){
        console.log("Employee tax rate is 20% if the salary is more the 15L per annum")
    }
}

const emp1 = {
    salary : 1600000
}
const emp2 = {
    salary : 1700000
}
const emp3 = {
    salary : 1800000
}
const emp4 = {
    salary : 1900000
}
const emp5 = {
    salary : 2000000
}
const emp6 = {
    salary : 2100000
}

// now we have to charge tax on all the employee so instead of wrting functions annd method in each object we'll do this -:

emp1.__proto__ = taxrate
emp2.__proto__ = taxrate
emp3.__proto__ = taxrate
emp4.__proto__ = taxrate
emp5.__proto__ = taxrate
emp6.__proto__ = taxrate

console.log(emp1)
console.log(emp2)
console.log(emp3)
console.log(emp4)
console.log(emp5)
console.log(emp6)

console.log(emp1.empTax)
console.log(emp1.empTax())