class Toyotacars {
    constructor(brand, carname, ModelNo) {
        this.BrandName = brand;
        this.Carname = carname;
        this.Model_No = ModelNo;
    }
    start(){
        console.log("Gear 1")
    }
    stop(){
        console.log("Neutral and brake")
    }
}

let ford = new Toyotacars("Toyota Motors", "Ford", "Fd_9811");
console.log(ford)

let scorpio = new Toyotacars("Scorpio Motors", "scorpio");
console.log(scorpio)