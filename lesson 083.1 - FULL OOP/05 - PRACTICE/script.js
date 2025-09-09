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

class Admin extends User{
    viewData(){
      let latestData =  prompt("Enter new data")
      console.log(latestData)
    }
    editData(){
        console.log("Edit your Data")
    }
}


let student1 = new User("kartik", "Karkik@gmail.com");
console.log(student1)


let student2 = new User("Dev", "syncdecodes@gmail.com")
console.log(student2)


let AdminObj = new Admin("kikuu", "kikuu@gmail.com");
console.log(AdminObj)