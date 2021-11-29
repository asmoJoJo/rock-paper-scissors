let computerPlay = function() {
    let options = ['Rock', 'Paper', 'Scissor'];
    return options[Math.floor(Math.random() * 3)];
}

let playerPlay = function() {
    let selection;
    selection = prompt("Rock, paper or scissor? Press q to quit.").toLowerCase();
    while(!(selection === "rock" || selection === "paper" || selection === "scissor" || selection === "quit"))   selection = prompt("Invalid input!! Choose 'rock', 'paper' or 'scissor'!!").toLowerCase();
    return selection.replace(selection[0], selection[0].toUpperCase());
}

let playRound = function(playerSelection = "", computerSelection = "")  {
    let win = `You win!! ${playerSelection} beats ${computerSelection}!!`
    let lose = `You lose!! ${playerSelection} gets beaten by ${computerSelection}!!`
    if(playerSelection === computerSelection) {
        console.log(`Whoops, that's a tie. You Both chose ${computerSelection}!!`);
        return null;
    }
    let hasPlayerWon = false;

    switch(playerSelection) {
        case "Rock":
            if(computerSelection === "Scissor") hasPlayerWon = true;
            break;
        case "Paper":
            if(computerSelection === "Rock") hasPlayerWon = true;
            break;
        case "Scissor":
            if(computerSelection === "Paper") hasPlayerWon = true;
            break;
    }
    if(hasPlayerWon)    {
        console.log(win);
        return "Player";
    }
    console.log(lose)
    return "Computer";
    
}

function game() {
    let choice;
    let playerScore = 0, computerScore = 0;

    while(true)    {
        choice = playerPlay();
        if(choice === "Quit") break;
        let result = playRound(choice, computerPlay());
        if(result === "Player") playerScore++;
        else if(result === "Computer") computerScore++;
        console.log(`Score[player - CPU]\t${playerScore} : ${computerScore}`);
    }

    console.log("'Till next time!!");
}

game();