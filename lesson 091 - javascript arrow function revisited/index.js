console.log("JS arrow func")

const hello = () => {
    console.log("Hello Dev")
    console.log("Hello Sia")
}
hello()

const hey = (Name, greet) => console.log("Hey Dev and " + Name + " - " + greet)
hey("Gaurav", "Good Morning")

const hey1 = Name1 => console.log("Hey Dev and " + Name1)
hey1("Vivek")

const obj = {
    Name: "Dev",
    age: 17,
    role: "Frontend developer",
    exp: "3 months :)",
    show: function () {
        let that = this
        console.log(that)
        setTimeout(function () {
            console.log(`Name of developer is ${that.Name} and his age is ${that.age}`)
        }, 2000)

    }, // just use setTimeout(()=>{})  => arrow function then no need to let that = this and all # arrow function uses lexical this
    show2: (role, exp) => {
        this.role = role;
        this.exp = exp
        console.log(`developer is a ${role} and have experience of ${exp}`)
    }
}
console.log(obj.Name)
obj.show()
obj.show2("frontend web developer", "3 months")