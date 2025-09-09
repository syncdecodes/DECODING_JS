// ------ 1

console.log("JS Inheritance -:")
class Parent {
    height() {
        console.log("5 foot 6 inch")
    }
    weight() {
        console.log("72 kg")
    }
}
class Child extends Parent { }
let obj = new Child();
console.log(obj)
console.log(obj.height())
console.log(obj.weight())




// ------ 2

class person {
    eat() {
        console.log("eat food")
    }
    sleep() {
        console.log("sleep")
    }
}

class engineer {
    work() {
        console.log("Solve problems")
    }
    build() {
        console.log("Build something")
    }
}

let dev = new engineer();
console.log(dev)







// ------ 3

// But as we know every engineer is a person so -:

class Person {
    constructor(species) {
        this.species = species
    }
    eat() {
        console.log("eat food")
    }
    sleep() {
        console.log("sleep")
    }
    work() {
        console.log("Do nothing")
    }
}

class Engineer extends Person {
    work() {
        console.log("Solve problems")
    }
    build() {
        console.log("Build something")
    }
}

class Doctor extends Person {
    work() {
        console.log("Treat patients")
    }
    build() {
        console.log("Builds connection")
    }
}

let kikuu = new Engineer("homo sapiens");
let sia = new Doctor("homo sapiens");

console.log(kikuu)
console.log(kikuu.work())
console.log(sia)
console.log(sia.work())

// When parent and child have same method then child's method will be used 