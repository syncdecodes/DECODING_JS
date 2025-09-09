class car {
    start() {
        console.log("start car")
    }
    stop() {
        console.log("stop car")
    }
    engine() {
        console.log("450 cc")
    }
    BrandName(Brand) {
        this.Co_name = Brand;
    }
    engineName(Engine){
        this.EngineName = Engine;
    }
}
console.log("Fortuner")
let fortuner = new car();
fortuner.BrandName("Toyota");
fortuner.engineName("H200_450cc")
console.log(fortuner)
console.log(typeof fortuner)
console.log(fortuner.start())
console.log(fortuner.stop())
console.log(fortuner.engine())

console.log("lexus")
let lexus = new car();
lexus.BrandName("Tata")
lexus.engineName("H105_450cc")
console.log(lexus)
console.log(typeof lexus)
console.log(lexus.start())
console.log(lexus.stop())
console.log(lexus.engine())

