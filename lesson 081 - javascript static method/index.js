// static method 1 

class Animal {
    constructor(Name) {
        this.Name = Name;
    }
    run() {
        console.log("animal is running")
    }
    walk() {
        console.log("Animal " + Animal.capital(this.Name) + " is now walking")
    }
    static capital(Name) {
        return Name.toUpperCase()
    }
}

let zebra = new Animal("zebra");
console.log(zebra)
zebra.run()
zebra.walk()



// ---------------


// static method 1 part two

class Bird {
    constructor(Name2) {
        this.Name2 = Name2;
    }
    fly() {
        console.log("Bird" + this.Name2 + "is flying")
    }
    eat() {
        console.log("Bird " + Bird.capitalize(this.Name2) + " is eating")
    }
    static capitalize(Name2) {
        return Name2.charAt(0).toUpperCase() + Name2.substr(1, Name2.length)
    }
}

let Peacock = new Bird("peacock");
console.log(Peacock)
Peacock.eat()



// ------------------


// static method 2

class Mammal {
    constructor(Name3) {
        this.Name3 = Name3;
    }
    fly() {
        console.log("Mammal " + this.Name3 + " is flying")
    }
    eat() {
        console.log("Mammal " + this.Name3 + " is eating")
    }
    static capitalize(Name3) {
        return Name3.charAt(0).toUpperCase() + Name3.substr(1, Name3.length)
    }
}

let Monkey = new Mammal(Mammal.capitalize("Orange Monkey"));
console.log(Monkey)
Monkey.fly()
Monkey.eat()



// ----------



// static method 3 best method

class Human {
    constructor(Name4) {
        this.Name4 = Human.lowerCase(Name4)
    }
    sleep() {
        console.log(this.Name4 + " is sleeping")
    }
    static lowerCase(Name4) {
        return Name4.toLowerCase()
    }
}

let Sakshi = new Human("SAKSHI")
console.log(Sakshi)
Sakshi.sleep()



// Lower and Uppercase eg -:
let friend = "Kikku"
console.log(friend.toLowerCase())
console.log(friend.toUpperCase())
