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

function getHumanChoice() {
    choice = prompt("Enter your choice:");
    return choice.toLowerCase();
}
let humanScore = 0
let compScore = 0

function playRound() {
    const human = getHumanChoice()
    const comp = getCompChoice()
    console.log("computer: "+ comp)
    if (human == comp) {
        console.log("Draw")
    }
    else if (human == "rock") {
        if (comp == "paper") {
            console.log("Paper beats Rock, You Lose")
            compScore++;
        } else {
            console.log("Rock beats Scissor, You Win")
            humanScore++;
        }
    }
    else if (human == "paper") {
        if (comp == "rock") {
            console.log("Paper beats Rock, You Win")
            humanScore++;
        } else {
            console.log("Scissors beats paper, You Lose")
            compScore++;
        }
    }
    else if (human == "scissor") {
        if (comp == "paper") {
            console.log("scissor beats paper, You win")
            humanScore++;
        } else {
            console.log("Rock beats Scissor, You Lose")
            compScore++;
        }
    }
}

function playGame() {
    for (i=1;i<=5;i++){
        console.log("Round: "+ i)
        playRound();
    }
    console.log("Scores are:")
    console.log("You: "+ humanScore)
    console.log("computer: "+ compScore)
}

playGame()