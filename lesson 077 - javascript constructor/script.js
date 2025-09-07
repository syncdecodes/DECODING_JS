console.log("All about constructors already done")

class RailwayForm {
    constructor(name, age, address, TrainNo) {
        this.UserName = name;
        this.UserAge = age
        this.UserAddress = address
        this.TrainNo = TrainNo
    }
    preview() {
        console.log(this.UserName + " your TrainNo is : " + this.TrainNo)
    }
    submit() {
        console.log(this.UserName + " your form has been submitted for the TrainNO : " + this.TrainNo)
    }
    cancel() {
        console.log(this.UserName + " your form has been cancelled for the TrainNO : " + this.TrainNo)
        this.TrainNo = 0
    }
    aftercancel() {
        console.log(this.UserName + "'s Form got rejected")
    }
}

let Passenger = new RailwayForm("Dev", 17, "Antartica", "987029");
function pre() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Passenger.preview();
            resolve(200)
        }, 1000)
    })
}
function sub() {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            Passenger.submit();
            resolve(200)
        }, 1000)
    })
}
function can() {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            Passenger.cancel();
            resolve(200)
        }, 1000)
    })
}
function pre2() {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            Passenger.preview();
            resolve(200)
        }, 1000)
    })
}
function afcan() {
    return new Promise((resolve, reject)=>{
    setTimeout(() => {
            Passenger.aftercancel()
            resolve(200)
        }, 1000)
    })
}

async function call() {
    await pre();
    await sub();
    await can();
    await pre2();;
    await afcan();
}

call()
