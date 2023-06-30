
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

    let win = true;
    let lose = false;

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

const buttons = document.querySelectorAll("button");

function updateScore(check) {
    if (check) {
        console.log("true");
        let x = document.querySelector(".player-score");
        x.textContent = parseInt(x.textContent) + 1;

        if (x.textContent == "5") {
            let y = document.querySelector('#winner');
            y.textContent = "You are the Winner"
        }
    } else {
        console.log("false");
        let x = document.querySelector(".computer-score");
        x.textContent = parseInt(x.textContent) + 1;

        if (x.textContent == "5") {
            let y = document.querySelector('#winner');
            y.textContent = "The Computer is the Winner"
        }
    }
}


buttons.forEach((button) => {
  button.addEventListener('click', () => { 
     console.log("Work");
     let btn = button.id.split("-")[0];
     let result = round(btn,getComputerChoice());
     updateScore(result);
  });
});