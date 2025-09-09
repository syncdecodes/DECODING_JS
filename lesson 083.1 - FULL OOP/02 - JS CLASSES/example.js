console.log("Practical example -:")

class samsung {
    constructor(){
        console.log("Creating new samsng phones")
    }
    MB() {
        console.log("Mother Board - xenox")
    }
    SChip() {
        console.log("Samsung chip - Schip ultra ")
    }
    CP() {
        console.log("Control Pannel - 591 advanced snap")
    }
    DP() {
        console.log("Display - gorilla glass protection")
    }
    ModelName(MN) {
        this.Model = MN
    }
    ModelNumber(MNo) {
        this.ModelNo = MNo
    }
}

let Samsung_M33_5g = new samsung();
Samsung_M33_5g.ModelName("SamM33")
Samsung_M33_5g.ModelNumber("M33_5491")
console.log(Samsung_M33_5g)
console.log(Samsung_M33_5g.MB())
console.log(Samsung_M33_5g.SChip())
console.log(Samsung_M33_5g.CP())
console.log(Samsung_M33_5g.DP())

let Samsung_A60 = new samsung();
Samsung_A60.ModelName("SamA60")
Samsung_A60.ModelNumber("A60_9894")
console.log(Samsung_A60)
console.log(Samsung_A60.MB())
console.log(Samsung_A60.SChip())
console.log(Samsung_A60.CP())
console.log(Samsung_A60.DP())