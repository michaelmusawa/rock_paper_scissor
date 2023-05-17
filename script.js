
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
    /* Selecting the elements to display points */
    const human_points = document.querySelector('#human_points');
    const comp_points = document.querySelector('#comp_points');

    /* Selecting the elements to display choices */
    const comp_choice = document.querySelector('.comp_choice');
    const human_choice = document.querySelector('.human_choice');

    /* Selecting the element to display choices message */

    const msg_1 = document.querySelector('#msg_1');
    const msg_2 = document.querySelector('#msg_2');

    /* getting choices */
    const ComputerChoice = getComputerChoice();
    const PlayerChoice = player_choice;

    /* displaying choices to respective elements */
    human_choice.innerText = `${PlayerChoice}`;
    comp_choice.innerText = `${ComputerChoice}`;


                    /*tie*/
        if (ComputerChoice == PlayerChoice) {
            msg_1.innerText = `Tie! No point`
            msg_2.innerText = `Good trial but you are not there yet`

                    /*win*/
        }else if ((ComputerChoice === "rock" && PlayerChoice === "paper") 
                || (ComputerChoice === "paper" && PlayerChoice === "scissor")
                || (ComputerChoice === "scissor" && PlayerChoice === "rock")){
                    player_point += 1;

                    msg_1.innerText =`${PlayerChoice} beats ${ComputerChoice}.`;
                    msg_2.innerText = `Good work! One point gained to the humans. Keep up.`;

                    /*loss*/
        }else{
            computer_point += 1;
            msg_1.innerText =`${ComputerChoice} beats ${PlayerChoice}.`
            msg_2.innerText =`Yucks! We lost a point to the computer. Better luck next round.`
        }
    human_points.innerText = `${player_point}` 
    comp_points.innerText = `${computer_point}`
     
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
            msg_1.innerText = "You lose!";
            msg_1.style.cssText ="color: Red"
            msg_2.innerText = "Computers have better luck than humans";
        }else if (computer_points < player_points){
            msg_1.innerText = "We Win!";
            msg_1.style.cssText ="color: blue"
            msg_2.innerText = "We Computers have NO chance against humans";
        }

        const btn_rock = document.getElementById('btn_rock');
        btn_rock.disabled = true;
        btn_rock.style.cssText = "background-color: grey"
        const btn_paper = document.getElementById('btn_paper');
        btn_paper.disabled = true;
        btn_paper.style.cssText = "background-color: grey"
        const btn_scissors = document.getElementById('btn_scissors');
        btn_scissors.disabled = true;
        btn_scissors.style.cssText = "background-color: grey"
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



