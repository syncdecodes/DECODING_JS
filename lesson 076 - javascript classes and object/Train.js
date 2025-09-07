class RailwayForm {
    Data(namee, TrainNo, TrainName){
        this.namee = namee;
        this.TrainNo = TrainNo;
        this.TrainName = TrainName;
    }
    submit() {
        console.log(this.namee + ": your Train form is submitted of train number :" + this.TrainNo + "and train name :" + this.TrainName)
    }
    cancel(){
        console.log(this.namee + ": your Train form got cancelled of train number :" + this.TrainNo + "and train name :" + this.TrainName)
    }
}

let passenger1_form1 = new RailwayForm();
passenger1_form1.Data("Dev", 12439, "Sapt Kranti")
passenger1_form1.submit()

let passenger2_form1 = new RailwayForm();
let passenger2_form2 = new RailwayForm();

passenger2_form1.Data("Karan", 87582, "Sadbhawna express")
passenger2_form2.Data("Karan", 87649, "Garibrath express")
passenger2_form1.submit()
passenger2_form2.cancel()