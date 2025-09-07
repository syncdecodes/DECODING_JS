// console.log("JS - get set and instance operators -:")
// class Animal {
//     constructor(name1) {
//         this.name1 = name1;
//     }
//     eat() {
//         console.log("Animal is eating")
//     }
// }

// let a = new Animal("Monkey")
// console.log(a.name1) // => Monkey





class Animal2 {
    constructor(name2) {
        this.Animal_name = name2
    }
    eat() {
        console.log("Animal is eating")
    }
    get name2() {
       return this.Animal_name;
    }
    set name2(new_name) {
        this.Animal_name = new_name;
    }
}

class rabbit extends Animal2{
    Carrot(){
        console.log("Rabbit is eating carrot")
    }
}
let r = new rabbit("Rabbit");
let b = new Animal2("Lion") 
// now b and r are instance of Animal2

console.log(b)
b.eat()
console.log(b.name2)
b.name2 = "Tiger" // we set new_name
console.log(b.name2)

console.log(r)
r.Carrot()





let c = 10 
console.log(b instanceof Animal2) // true
console.log(r instanceof Animal2) // true
console.log(c instanceof Animal2) // false