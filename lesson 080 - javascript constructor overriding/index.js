console.log("JS method over riding -:")





class Employee{
    constructor(type, age){
        this.programmer_type = type;
        this.pro_age = age;
    }
    login(name){
        console.log(`${name} logged in`)
    }
    logout(){
        console.log(`employee logged out`)
    }
    leaves(name, days){
        console.log(`so ${name} requested leave for ${days} days :)`)
    }
}






class python_programmer extends Employee{

    // constructor(...args){ ---> If there is no constructor in the child class, this is created automatically
    //     super(...args)
    // }

    coffee(name, x){
        super.login(name) // method over riding
        console.log(`${name} requested ${x} coffee`)
    }
    p_projects(name, y){
        console.log(`${name} have to complete ${y} projects in 7 days`)
        super.leaves("Aman vishvkarma", 7) // method over riding
    }
}
let Emp1 = new python_programmer("Python", 27);
console.log(Emp1)







class JS_programmer extends Employee{

    // constructor(...args){ ---> If there is no constructor in the child class, this is created automatically
    //     super(...args)
    // }

    Tea(){
        console.log(`JS_programmer requested ${x} Tea`)
    }
    js_projects(){
        console.log(`python_programmer have to complete ${y} projects in 7 days`)
    }
}
let Emp2 = new JS_programmer("Javascript", 23)
console.log(Emp2)