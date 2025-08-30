console.log("javascript hello handling - try and catch")

setTimeout(()=>{
    console.log("Hacking wifi")
}, 1000)

try{
    console.log(rahul) // as we know that this is not the right sytax as console.log(rahul) is not defined hence it will throw an error now to handle this error we'll use try and catch -:
}
catch(error_occured){
    console.log(error_occured) // this will not throw error 
    // either expected output is - rahul is not defined
    // if there is no error then catch will be ignored 
}

setTimeout(()=>{
    console.log("Fetching user name")
}, 2000)

setTimeout(()=>{
    console.log("Checking pasword and id")
}, 3000)

setTimeout(()=>{
    console.log("User id and password fetched")
}, 4000)

// Note - try only handles Synchronous codes means if we put setTimeout and setInterval functions inside try it wont work and will throw an error....

// means we can use try fn inside setTimeout and setInterval but we can't use setTimeout and setInterval inside try # Asynchronous functions not works inside try - try catch works Symchronously