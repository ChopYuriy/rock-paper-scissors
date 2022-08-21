const userChoice = prompt("Write: rock or paper or scissors").toLowerCase()
const computerSign = ["rock", "paper", "scissors"]
const computerPick = Math.floor(Math.random() * computerSign.length)
const computerChoice = computerSign[computerPick]

function game(computerChoice, userChoice) {

     if (userChoice === computerChoice) {
          return alert("Draw")
     } else if (
          (userChoice === "rock" && computerChoice === "scissors") ||
          (userChoice === "paper" && computerChoice === "rock") ||
          (userChoice === "scissors" && computerChoice === "paper")) {
          return alert(`You Win! computer chose ${computerChoice}`)
        

     } else if (
          (computerChoice === "rock" && userChoice === "scissors") ||
          (computerChoice === "paper" && userChoice === "rock") ||
          (computerChoice === "scissors" && userChoice === "paper")) {
          return alert(`Computer Win! It chose ${computerChoice}`)
     } else {
          return alert("Must write: rock or paper or scissors")
     }
};
game(computerChoice, userChoice)

console.log(computerChoice)
console.log(userChoice)
