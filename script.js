
function getComputerChoice() {
    let choices = ["paper","scissor","rock"];
    const random_index = Math.floor(Math.random()*3);
    const random_choice = choices[random_index];
    return random_choice;

};

var computer_point = 0;
var player_point = 0;

function Game (player_choice) {
    let points;

        const ComputerChoice = getComputerChoice();
        const PlayerChoice = player_choice;

        let tie = `Tie! No point.
                    Your points ${player_point}.
                    Computer point ${computer_point}.` 

                    /*tie*/
        if (ComputerChoice == PlayerChoice) {
            console.log (tie);

                    /*win*/
        }else if ((ComputerChoice === "rock" && PlayerChoice === "paper") 
                || (ComputerChoice === "paper" && PlayerChoice === "scissor")
                || (ComputerChoice === "scissor" && PlayerChoice === "rock")){
                    player_point += 1;
            console.log (`Win. ${PlayerChoice} beats ${ComputerChoice}.
            Your points ${player_point}.
            Computer point ${computer_point}`);

                    /*loss*/
        }else{
            computer_point += 1;
            console.log (`You loss! ${ComputerChoice} beats ${PlayerChoice}.
            Your points ${player_point}.
            Computer points ${computer_point}`);
        }
        
    points = [computer_point,player_point]
    console.log(points);
    Winner (points);
}

function Winner (points) {
    let winner;
    let computer_points = points[0];
    let player_points = points[1];

    if ((computer_points >= 5) || (player_points >= 5)) {
        if (computer_points > player_points){
            winner = "You lose! Better luck next time";
        }else if (computer_points > player_points){
            winner = "You win!";
        }


        alert(winner);
        const btn_rock = document.getElementById('btn_rock');
        btn_rock.disabled = true;
        const btn_paper = document.getElementById('btn_paper');
        btn_paper.disabled = true;
        const btn_scissors = document.getElementById('btn_scissors');
        btn_scissors.disabled = true;
    }

    
}

const btn_rock = document.querySelector('#btn_rock')
btn_rock.addEventListener('click', () => {
    var player_choice = 'rock';
    Game (player_choice);
});

const btn_paper = document.querySelector('#btn_paper')
btn_paper.addEventListener('click', () => {
    var player_choice = 'paper';
    Game (player_choice);
});

const btn_scissors = document.querySelector('#btn_scissors')
btn_scissors.addEventListener('click', () => {
    var player_choice = 'scissor';
    Game (player_choice);
});



