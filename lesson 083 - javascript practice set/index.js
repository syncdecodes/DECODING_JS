console.log("Js practice set - OOP")
// complex number = real number + imaginary number 

class complex {
    constructor(real, imaginary) {
        this.real_num = real;
        this.imaginary_num = imaginary;
    }
    add(number) {
        this.real_num = this.real_num + number.real_num
        this.imaginary_num = this.imaginary_num + number.imaginary_num
    }
}

let num1 = new complex(4, 6)
let num2 = new complex(8, 10)

console.log(num1)
console.log(num2)

console.log(num1.real_num, num1.imaginary_num)
console.log(num2.real_num, num2.imaginary_num)
console.log(num1.add(num2))


class Human{
    constructor(Hname, age){
        this.Human_name = Hname;
        this.Human_age = age;
    }
    walk(){
        console.log("Human is walking")
    }
}



class student extends Human{
    constructor(Hname, age, std, school){
        super(Hname, age, std, school)
        this.Class = std;
        this.School = school;
    }
    run(){
        super.walk()
        console.log("student is running")
    }
}

let S1 = new student("Ankit", 18, "10th class", "Dayanand anglo vedic")
let S2 = new student("Dev", 17, "12th class", "PGDAV")

console.log(S1)
S1.run()
console.log(S2)


class employee extends Human{
    constructor(Hname, age, salary, company){
        super(Hname, age, salary, company)
        this.Hname
        this.salary = salary;
        this.Co_name = company
    }
    work(){
        console.log(this.Human_name + " Employee is working")
    }
}

let E1 = new employee("Vivek", 21 , 40000, "microsoft")
let E2 = new employee("Gaurav", 24, 35000, "Wipro")

console.log(E1)
console.log(E2)

E1.work()
E2.work()

console.log(S1 instanceof Human) // true bcs all are inherited from Human
console.log(S2 instanceof Human) // true bcs all are inherited from Human
console.log(E1 instanceof Human) // true bcs all are inherited from Human
console.log(E1 instanceof Human) // true bcs all are inherited from Human