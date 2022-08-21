const userChoise = prompt("Write: stone or paper or scissors")
const computerSign = ["stone", "paper", "scissors"]
const computerPick = Math.floor(Math.random() * computerSign.length)
const computerChoise = computerSign[computerPick]

function game(computerChoise, userChoise) {

if (computerChoise === userChoise) {
    return alert("Draw!")
} else if (
    (userChoise === "stone" && computerChoise === "scissors") ||
    (userChoise === "paper" && computerChoise === "stone") ||
    (userChoise === "scissors" && computerChoise === "paper")) {
    return alert(`You Win! computer chose ${computerChoise}`)
    
} else if (userChoise != "stone" || userChoise != "paper" || userChoise != "stone") {
    return alert("Must write: stone or paper or scissors")

} else {
    return alert(`Computer Win! It chose ${computerChoise}`)
}
        
};
game(computerChoise, userChoise)

console.log(computerChoise)