console.log("super keyword is used to call the constuctor of its parent class to access the parents properties and methods")

class Person {
    constructor(degree) {
        this.degree = degree;
    }
    eat() {
        console.log("Eat food")
    }
    sleep() {
        console.log("sleep")
    }
}

class engineer extends Person {
    constructor(degree) {
        super(); // To invoke parent class constructor
        this.degree = degree;
    }
    work() {
        console.log("Solve problems")
    }
}

class Doctor extends Person {
    work() {
        console.log("Treat patients")
    }
}


let normal_person = new Person("none")
let Dev_engineer = new engineer("BTECH");
let Dev_Doctor = new Doctor("MBBS")

console.log(normal_person)
console.log(normal_person.eat())

console.log(Dev_engineer)
console.log(Dev_engineer.eat())
console.log(typeof Dev_engineer) // object

console.log(Dev_Doctor)
console.log(Dev_Doctor.eat())
