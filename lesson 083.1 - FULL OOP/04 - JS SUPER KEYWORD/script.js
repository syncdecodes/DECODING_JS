console.log("super keyword is used to call the constuctor of its parent class to access the parents properties and methods")

class Person {
    constructor(degree, College) {
        this.degree = degree;
        this.College = College;
    }
    eat() {
        console.log("Eat food")
    }
    sleep() {
        console.log("sleep")
    }
}

class engineer extends Person {
    constructor(degree, College) {
        super(degree, College); // To invoke parent class constructor
    }
    work() {
        console.log("Solve problems")
    }
}

class Doctor extends Person {
    work() {
        super.eat()
        console.log("Treat patients")
    }
}


let normal_person = new Person("none")
let Dev_engineer = new engineer("BTECH", "IIT B");
let Dev_Doctor = new Doctor("MBBS", "AIIMS")

console.log(normal_person)
console.log(normal_person.eat())

console.log(Dev_engineer)
console.log(Dev_engineer.eat())
console.log(typeof Dev_engineer) // object

console.log(Dev_Doctor)
console.log(Dev_Doctor.work())