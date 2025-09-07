console.log("JS method over riding -:")
class Employee{
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
    coffee(name, x){
        super.login(name) // method over riding
        console.log(`${name} requested ${x} coffee`)
    }
    p_projects(name, y){
        console.log(`${name} have to complete ${y} projects in 7 days`)
        super.leaves("Aman vishvkarma", 7) // method over riding
    }
}

let Emp1 = new python_programmer();

console.log(Emp1.coffee("Aman vishvakarma"))
console.log(Emp1.p_projects("Aman vishvakarma", 4))


class JS_programmer extends Employee{
    Tea(){
        console.log(`JS_programmer requested ${x} Tea`)
    }
    js_projects(){
        console.log(`python_programmer have to complete ${y} projects in 7 days`)
    }
}

// Doing the same thing using constructors -: in script.js 