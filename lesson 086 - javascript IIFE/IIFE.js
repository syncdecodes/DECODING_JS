console.log("JS IIFE")

function hello(){
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            resolve(200)
            console.log("Hello")
        }, 1000)
    })
}
function hey(){
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            resolve(200)
            console.log("Hey")
        }, 1000)
    })
}

// IIFE

(async ()=>{
    await hello();
    await hey ();
})()

// IIFE - invoke function withiout calling

