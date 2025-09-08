console.log("Js practice set - OOP")

class complex {
    constructor(real, imaginary) {
        this.real_num = real;
        this.imaginary_num = imaginary;
    }
    get Real() {
       return this.real_num
    }
    get Imaginary(){
        return this.imaginary_num
    }
    set Imaginary(newImaginary){
        this.imaginary_num = newImaginary
    }
    set Real(newReal){
        this.real_num = newReal
    }
}

let num1 = new complex(4, 6)
let num2 = new complex(8, 10)
num1.Real = 10;
num1.Imaginary = 10;
console.log(num1)