console.log("javascript exercise 2")

let random = Math.random()
console.log(random)

if (random < 0.33) {
    console.log("s")
    game = prompt("enter snake, water or gun if you enter the correct consonant you win!!")
    if (game == "s") {
        alert("you won")
    }
    else {
        alert("you lost")
    }
}
else if (random >= 0.33, random < 0.66) {
    console.log("w")
    game = prompt("enter snake, water or gun if you enter the correct consonant you win!!")
    if (game == "w") {
        alert("you won")
    }
    else {
        alert("you lost")
    }
}
else {
    console.log("g")
    game = prompt("enter snake, water or gun if you enter the correct consonant you win!!")
    if (game == "g") {
        alert("you won")
    }
    else {
        alert("you lost")
    }
}

random = Math.random()
console.log(random)



let c = confirm("do you want to play the game again")
if (c) {
    if (random < 0.33) {
        console.log("s")
        game = prompt("enter snake, water or gun if you enter the correct consonant you win!!")
        if (game == "s") {
            alert("you won")
        }
        else {
            alert("you lost")
        }
    }
    else if (random >= 0.33, random < 0.66) {
        console.log("w")
        game = prompt("enter snake, water or gun if you enter the correct consonant you win!!")
        if (game == "w") {
            alert("you won")
        }
        else {
            alert("you lost")
        }
    }
    else {
        console.log("g")
        game = prompt("enter snake, water or gun if you enter the correct word you win!!")
        if (game == "g") {
            alert("you won")
        }
        else {
            alert("you lost")
        }
    }
}


// simple se code ko itna complex bna dia  \-_-/....

