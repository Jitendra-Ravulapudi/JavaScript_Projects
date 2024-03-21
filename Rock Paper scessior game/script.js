const choices = ['rock','Paper','Scessior']
const playerDisplay = document.getElementById("playerDisplay")
const computerDisplay = document.getElementById("computerDisplay")
const resultDisplay = document.getElementById("resultDisplay")
const playerScoreDisplay = document.getElementById("playerScoreDisplay")
const computerScoreDisplay = document.getElementById("computerScoreDisplay")

let playerScore = 0
let computerScore = 0

function playGame(playerchocie){
    const computerchoice = choices[Math.floor(Math.random()*3)]
    let result = "";

    if(playerchocie === computerchoice){
        result = "IT'S A TIE"
    }
    else{
        switch(playerchocie){
            case 'rock':
                result = (computerchoice === 'Scessior') ? "YOU WIN!" : "YOU LOSE!"
                break;
            
            case 'Paper':
                result = (computerchoice === 'rock') ? "YOU WIN!" : "YOU LOSE!"
                break;
            
            case 'Scessior':
                result = (computerchoice === 'Paper') ? "YOU WIN!" : "YOU LOSE!"
                break;
        }
    }

    playerDisplay.textContent = `PLAYER : ${playerchocie}`
    computerDisplay.textContent = `COMPUTER: ${computerchoice}`
    resultDisplay.textContent = result
    resultDisplay.classList.remove("greenText","redText")
    switch(result){
        case "YOU WIN!":
            resultDisplay.classList.add("greenText")
            playerScore++
            playerScoreDisplay.textContent = playerScore
            break;
        
        case "YOU LOSE!":
            resultDisplay.classList.add("redText")
            computerScore++
            computerScoreDisplay.textContent = computerScore
            break;
    }
}
