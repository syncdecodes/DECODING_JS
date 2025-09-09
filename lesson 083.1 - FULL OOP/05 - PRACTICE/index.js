console.log("JS practice of OOP")

const DATA = ("College website data accesable to college students only")

class User {
    // creating properties -:
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    viewData() {
        console.log("College Data : ", DATA)
    }
    age(age) {
        this.age = age;
    }
    height(height) {
        this.height = height;
    }
}

let student1 = new User("kartik", "Karkik@gmail.com");
console.log(student1)
console.log(student1.viewData())

let student2 = new User("Dev", "syncdecodes@gmail.com")
student2.age(17)
student2.height("5 foot 10 inch")
console.log(student2)
console.log(student2.viewData())