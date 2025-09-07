console.log("JS method over riding -:")

class Employee {
    constructor(type, age) {
        this.programmer_type = type;
        this.pro_age = age;
    }
    login(name) {
        console.log(`${name} logged in`)
    }
    logout() {
        console.log(`employee logged out`)
    }
    leaves(name, days) {
        console.log(`so ${name} requested leave for ${days} days :)`)
    }
}






class python_programmer extends Employee {
    constructor(type, age, language, DOB) {
        super(type, age, language, DOB)
        this.language = language;
        this.DOB = DOB
        console.log(`${language} is a programming language`)
    }
    coffee(name, x) {
        super.login(name)
        console.log(`${name} requested ${x} coffee`)
    }
    p_projects(name, y) {
        console.log(`${name} have to complete ${y} projects in 7 days`)
        super.leaves("Aman vishvkarma", 7)
    }
}

let Emp1 = new python_programmer("Python_programmer", 27, "Python", "9 feb 2008");
console.log(Emp1)







class JS_programmer extends Employee {
    Tea() {
        console.log(`JS_programmer requested ${x} Tea`)
    }
    js_projects() {
        console.log(`python_programmer have to complete ${y} projects in 7 days`)
    }
}

let Emp2 = new JS_programmer("Javascript", 23)
console.log(Emp2)

// Important code....*