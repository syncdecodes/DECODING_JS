console.log("javascript finally clause")

try {
    let a = 0
    console.log("zero ran successfully for let a = 0")
}
catch (err) {
    console.log("this is an error" + err)
}

const f = () => {

    try {
        console.log(programme)
        console.log("programme ran successfully")
    }
    catch (err) {
        console.log("this is an error" + err)
        console.log(rahul) // I am an error 
    }
    // console.log("This will not run because there's an error in catch") but finally will run..
    finally {
        console.log("This progamme contains error (I am inside finally)") // No matter what this code will run even if there's an error in catch!
        // finally is used for final clean ups
    }

}
f() // calling f function
console.log("End")