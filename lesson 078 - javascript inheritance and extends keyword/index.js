class Animal {
    constructor(color, habitat){
        this.Animal_color = color;
        this.Animal_habitat = habitat;
    }
    species (){
        console.log("Mammals")
    }
    legs(){
        console.log("2 legs")
    }
    hands(){
        console.log("2 hands")
    }
}

class Monkey extends Animal{
  animal_name(){
    console.log("Monkey")
  }
  type(){
    console.log("herbivore")
  }
}

class Chimpanzee extends Animal{
    animal_name(){
        console.log("Chimpanzee")
    }
    type(){
        console.log("omnivores")
    }
}

let animal1 = new Monkey("Brown", "Trees")
let animal2 = new Chimpanzee("Black", "Jungles")

console.log(animal1)
console.log(animal1.legs())
console.log(animal1.hands())
console.log(animal2)

