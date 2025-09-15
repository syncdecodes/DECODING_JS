console.log("Password generator using javascript")
class Password {
    constructor() {
        console.log("Password generator")
        this.pass = ""
    }
    geneartePass(length) {
        let chars = "abcdefghijklmnopqrstuvwxyz"
        let numbers = "1234567890"
        let special = "!@#$%^&*()"
        if (length < 4) {
            console.log("Your password should have atleast 4 characters")
        }
        else {
           let i = 0;
            while (i < length) {
                this.pass += chars[Math.floor(Math.random() * chars.length)]
                this.pass += numbers[Math.floor(Math.random() * numbers.length)]
                this.pass += special[Math.floor(Math.random() * special.length)]
                i += 3
            }
            return this.pass
        }
    }
}


let P = new Password()
console.log(P.geneartePass(9))