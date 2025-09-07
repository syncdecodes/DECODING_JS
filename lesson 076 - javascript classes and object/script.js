class RailwayForm {
    name(name) {
        this.name = name
    }
    age(age) {
        this.age = age
    }
    SeatClass(SeatClass) {
        this.SeatClass = SeatClass
    }
    Date(Date) {
        this.Date = Date
    }
}

let person1 = new RailwayForm
person1.name("Raghav")
person1.age(22)
person1.SeatClass("2nd AC")
person1.Date("10th october 2025")

console.log(person1)

let person2 = new RailwayForm
person2.name("Aaditya")
person2.age(26)
person2.SeatClass("1st AC")
person2.Date("24th october 2025")

console.log(person2)

// Doing the same thing using constructor* in script.js 