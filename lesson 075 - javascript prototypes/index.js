console.log("javacsript prototypes")
let a = {
    name: "Dev",
    age: 17,
    language: "Javascript"
}
console.log(a)

let b = {
    run : ()=>{
        alert("Code is running")
    }
    // run is a method
}
b.__proto__ = {
    name2 : "kikuu"
}
a.__proto__ = b
a.run()
console.log(a.name2)
