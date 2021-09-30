function computerPlay(){
    let x = Math.floor(Math.random() * 3);
    if(x === 2){
        return 'scissors';
    }
    else if(x === 1){
        return 'paper';
    }
    else{
        return 'rock';
    }
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection === "rock"){
        if(computerSelection === 'paper'){
            console.log("You lose. Paper beats rock!");
            return -1;
        }
        if(computerSelection === 'scissors'){
            console.log("You win. Rock beats scissors!");
            return 1;
        }
        if(computerSelection === 'rock'){
            console.log("It's a tie.");
            return 0;
        }
    }
    else if(playerSelection === "paper"){
        if(computerSelection === 'rock'){
            console.log("You win. Paper beats rock!");
            return 1;
        }
        if(computerSelection === 'scissors'){
            console.log("You lose. Scissors beats paper!");
            return -1
        }
        if(computerSelection === 'paper'){
            console.log("It's a tie.")
            return 0;
        }
    }
    else{
        if(computerSelection === 'rock'){
            console.log("You lose. Rock beats scissors!");
            return -1;
        }
        if(computerSelection === 'paper'){
            console.log("You win. Scissors beats paper!");
            return 1;
        }
        if(computerSelection === 'scissors'){
            console.log("It's a tie.")
            return 0;
        }
    }
}

function game(){
    let playerwins = 0;
    let compwins = 0;
    while(playerwins < 5 && compwins < 5){
        let x = window.prompt("Please choose r p s");
        let y = playRound(x, computerPlay());
        if(y === 1){
            playerwins++;
            console.log(`Score is ${playerwins}:${compwins}`);
        }
        else if (y === -1){
            compwins++;
            console.log(`Score is ${playerwins}:${compwins}`);
        }
        else{
            console.log(`Score is ${playerwins}:${compwins}`)
        }
    }
    if(playerwins === 5){
        return "Congratulations, you win!"
    }
    else{
        return "You lost."
    }
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));