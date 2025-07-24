console.log("lets make our complex code simple and play snake water gun, can you win?")

let computer = prompt("enter snake, water or gun")

let random = Math.floor(Math.random() * 3);
console.log(random)

let player = ["snake", "water", "gun"][random]

const match = (player, computer) => {
    if (computer === player) {
        return "nobody wins, match tied # 1:1"
    }

    else if (computer === "snake" && player === "water") {
        return "computer"
    }

    else if (computer === "snake" && player === "gun") {
        return "player"
    }

    else if (computer === "gun" && player === "snake") {
        return "computerr"
    }

    else if (computer === "gun" && player === "water") {
        return "player"
    }

    else if (computer === "water" && player === "snake") {
        return "player"
    }

    else if (computer === "water" && player === "gun") {
        return "computer"
    }
}

let result = match(player, computer)
document.write(`player: ${player} and computer: ${computer} \nthe winner is: ${result}`)