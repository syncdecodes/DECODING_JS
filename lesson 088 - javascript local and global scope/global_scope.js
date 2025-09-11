let a = 10; // it is globally scoped as its not inside block - {}
function num(){
    console.log(a)
}
num()
console.log(a)