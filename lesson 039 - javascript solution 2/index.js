console.log("lets make our complex code simple and play snake water gun, can you win?")

let computer = prompt("enter snake, water or gun")

let random = Math.floor(Math.random() * 3);
console.log(random)

let player = ["snake", "water", "gun"][random]

const match = (player, computer) => {
    if (player === computer) {
        return "nobody wins, match tied # 1:1"
    }

    else if (player === "snake" && computer === "water") {
        return "computer"
    }

    else if (player === "snake" && computer === "gun") {
        return "player"
    }

    else if (player === "gun" && computer === "snake") {
        return "computerr"
    }

    else if (computer === "gun" && computer === "water") {
        return "player"
    }

    else if (computer === "water" && computer === "snake") {
        return "player"
    }

    else if (player === "water" && computer === "gun") {
        return "computer"
    }
}

let result = match(player, computer)
document.write(`player: ${computer} and computer: ${player} \nthe winner is: ${result}`)