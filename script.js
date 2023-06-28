function getComputerChoice() {
    let choice =  Math.floor(Math.random() * (3 - 0) + 0);
    if (choice == 0) {
        return "Rock";
    } else if (choice == 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function round (playerSelection, computerSelection) {
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.toLowerCase().slice(1);

    if (playerSelection == computerSelection) {
        return "Draw";
    }

    let win = "You Win! " + playerSelection + " beats " + computerSelection; 
    let lose = "You Lost! " + computerSelection + " beats " + playerSelection;

    switch (playerSelection) {
        case "Rock":
            if (computerSelection == "Scissors") {
                return win;
            }
            return lose;
        
        case "Paper":
            if (computerSelection == "Rock") {
                return win;
            }
            return lose;

        case "Scissors":
            if (computerSelection == "Paper") {
                return win;
            }
            return lose;
    }
}

function game () {
    for (let i = 0; i < 5; i++) {
        let input = prompt("Enter choice");
        console.log(round(input,getComputerChoice()));
    }
}

game();