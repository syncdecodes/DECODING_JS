// => creating an object -:

const student = {
    name: "Dev shraff",
    age: 17,
    marks: 84,
    // creating a method in object -:
    printMarks: () => {
        console.log("Marks :", marks)
    }
}
console.log(student)
console.log(student.name)
console.log(student.age)
console.log(student.marks)
console.log(student.printMarks)

const arr = ["apple", "banana", "mango"]
console.log(arr)
console.log(typeof arr) // note that type of array is object
arr.push("litchi");
console.log(arr)
arr.pop()
console.log(arr)
