// ROCK PAPER SCISSOR
function getCompChoice() {
    num = Math.floor(Math.random() * 3)
    switch (num) {
        case 0:
            return "rock"
            break;
        case 1:
            return "paper"
            break;
        case 2:
            return "scissor"
        default:
            break;
    }
}

let humanScore = 0
let compScore = 0

function playRound(human,comp) {
    if (human == comp) {
        console.log("Draw")
        result.textContent="Draw"
    }
    else if (human == "rock") {
        if (comp == "paper") {
            console.log("Paper beats Rock, You Lose")
            result.textContent="Paper beats Rock, You Lose"
            compScore++;
        } else {
            console.log("Rock beats Scissor, You Win")
            result.textContent=("Rock beats Scissor, You Win")
            humanScore++;
        }
    }
    else if (human == "paper") {
        if (comp == "rock") {
            console.log("Paper beats Rock, You Win")
            result.textContent=("Paper beats Rock, You Win")
            humanScore++;
        } else {
            console.log("Scissors beats paper, You Lose")
            result.textContent=("Scissors beats paper, You Lose")

            compScore++;
        }
    }
    else if (human == "scissor") {
        if (comp == "paper") {
            console.log("scissor beats paper, You win")
            result.textContent=("Scissors beats paper, You win")
            humanScore++;
        } else {
            console.log("Rock beats Scissor, You Lose")
            result.textContent=("rock beats scissors, You Lose")
            compScore++;
        }
    }
    scoreboard.textContent=`Score:
    you:${humanScore}
    computer:${compScore}`

}
function scoreCheck(){
    if(humanScore==5) {
        alert("YOU WIN")
        location.reload()}
    if(compScore==5) {
        alert("you lose")
        location.reload()}
    
}
const btn= document.querySelectorAll(".btn")
btn.forEach((button)=>{
    button.addEventListener("click",()=>{
        const playerSelection=button.id
        const compSelection = getCompChoice()
        comchoose.textContent="computer chooses: "+compSelection
        playRound(playerSelection,compSelection)
        scoreCheck()
    })
})

const container= document.querySelector(".container")
const result= document.createElement("div")
const comchoose= document.createElement("p")
const scoreboard=document.createElement("div")
container.appendChild(comchoose)
container.appendChild(result)
container.appendChild(scoreboard)