class RailwayForm{
constructor(name, age, SeatClass, Date, trainName, TrainNo){
this.name = name 
this.age = age
this.SeatClass = SeatClass
this.Date = Date
this.trainName = trainName
this.TrainNo = TrainNo
}
}

let Traveller1 = new RailwayForm("Dev", 17 , "3rd AC", "10th October 2025", "Sapt Kranti", "1297")
console.log(Traveller1)

let Traveller2 = new RailwayForm("kikuu", 17 , "3rd AC", "10th October 2025", "Sapt Kranti", "1297")
console.log(Traveller2)
console.log(Traveller2.TrainNo)

let Traveller3 = new RailwayForm("lucky", 19 , "3rd AC", "18th October 2025", "Gaziabaad express", "1299")
console.log(Traveller3)